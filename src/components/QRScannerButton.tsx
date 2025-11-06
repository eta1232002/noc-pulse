import { QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const QRScannerButton = () => {
  const { toast } = useToast();

  const handleScan = () => {
    // Simulate QR scanning
    toast({
      title: "✅ Attendance Recorded Successfully",
      description: "Sign in registered at " + new Date().toLocaleTimeString(),
    });
  };

  return (
    <Button
      onClick={handleScan}
      size="lg"
      className="w-full h-32 text-lg font-semibold gradient-primary hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] rounded-2xl"
    >
      <QrCode className="mr-3 h-8 w-8" />
      Scan QR Code
    </Button>
  );
};

export default QRScannerButton;
