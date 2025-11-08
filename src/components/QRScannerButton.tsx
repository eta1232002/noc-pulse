import { QrCode, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

const QRScannerButton = () => {
  const { toast } = useToast();
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const handleScan = () => {
    setIsScanning(true);
  };

  const stopScanner = async () => {
    if (scannerRef.current?.isScanning) {
      try {
        await scannerRef.current.stop();
      } catch (error) {
        console.error("Error stopping scanner:", error);
      }
    }
    scannerRef.current = null;
    setIsScanning(false);
    setHasPermission(null);
  };

  useEffect(() => {
    if (isScanning) {
      // Wait for the Dialog to render the DOM element
      const timeoutId = setTimeout(() => {
        const element = document.getElementById("qr-reader");
        if (!element) {
          console.error("QR reader element not found");
          setHasPermission(false);
          toast({
            title: "Scanner Error",
            description: "Unable to initialize camera. Please try again.",
            variant: "destructive",
          });
          setIsScanning(false);
          return;
        }

        const qrCodeScanner = new Html5Qrcode("qr-reader");
        scannerRef.current = qrCodeScanner;

        qrCodeScanner
          .start(
            { facingMode: "environment" },
            {
              fps: 10,
              qrbox: { width: 250, height: 250 },
            },
            (decodedText) => {
              toast({
                title: "✅ Attendance Recorded Successfully",
                description: "Sign in registered at " + new Date().toLocaleTimeString(),
              });
              stopScanner();
            },
            (errorMessage) => {
              // Ignore decode errors (happens while scanning)
            }
          )
          .then(() => {
            setHasPermission(true);
          })
          .catch((err) => {
            console.error("Camera error:", err);
            setHasPermission(false);
            toast({
              title: "Camera Access Required",
              description: "Please allow camera access to scan QR codes.",
              variant: "destructive",
            });
            stopScanner();
          });
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        if (scannerRef.current?.isScanning) {
          scannerRef.current.stop().catch(console.error);
        }
      };
    }
  }, [isScanning, toast]);

  return (
    <>
      <Button
        onClick={handleScan}
        size="lg"
        className="w-full h-32 text-lg font-semibold gradient-primary hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] rounded-2xl"
      >
        <QrCode className="mr-3 h-8 w-8" />
        Scan QR Code
      </Button>

      <Dialog open={isScanning} onOpenChange={(open) => !open && stopScanner()}>
        <DialogContent className="sm:max-w-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Scan QR Code</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={stopScanner}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <div id="qr-reader" className="w-full rounded-lg overflow-hidden" />
            {hasPermission === false && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                <p className="text-sm text-muted-foreground text-center px-4">
                  Camera access denied. Please enable camera permissions in your browser settings.
                </p>
              </div>
            )}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Position the QR code within the frame to scan
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QRScannerButton;
