import { ArrowLeft, Download, Smartphone, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Install = () => {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
      setIsInstallable(false);
    }

    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-primary text-white p-6 pb-12 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/20 h-10 w-10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Install App</h1>
        </div>
        <p className="text-white/80 text-sm">
          Install NOC HR on your phone for quick access
        </p>
      </div>

      <div className="px-4 -mt-8 space-y-6 pb-8">
        {/* Install Card */}
        <div className="gradient-card rounded-2xl p-6 card-shadow border border-border/50">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
              <Smartphone className="h-16 w-16 text-primary" />
            </div>

            {isInstalled ? (
              <>
                <div className="p-3 rounded-full bg-green-500/10">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-xl font-bold">App Already Installed!</h2>
                <p className="text-muted-foreground">
                  You can find NOC HR on your home screen
                </p>
              </>
            ) : isInstallable ? (
              <>
                <h2 className="text-xl font-bold">Install NOC HR</h2>
                <p className="text-muted-foreground">
                  Add this app to your home screen for quick access and offline use
                </p>
                <Button
                  onClick={handleInstallClick}
                  size="lg"
                  className="w-full gradient-primary text-white font-semibold"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Install Now
                </Button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold">Install NOC HR</h2>
                <p className="text-muted-foreground">
                  To install this app on your device, follow the instructions below
                </p>
              </>
            )}
          </div>
        </div>

        {/* iOS Instructions */}
        <div className="gradient-card rounded-2xl p-6 card-shadow border border-border/50">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <span>📱</span> For iPhone Users
          </h3>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-semibold text-primary">1.</span>
              <span>Tap the Share button (box with arrow) at the bottom of Safari</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">2.</span>
              <span>Scroll down and tap "Add to Home Screen"</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">3.</span>
              <span>Tap "Add" in the top right corner</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">4.</span>
              <span>The NOC HR app will appear on your home screen!</span>
            </li>
          </ol>
        </div>

        {/* Android Instructions */}
        <div className="gradient-card rounded-2xl p-6 card-shadow border border-border/50">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <span>🤖</span> For Android Users
          </h3>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-semibold text-secondary">1.</span>
              <span>Tap the menu button (three dots) in your browser</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-secondary">2.</span>
              <span>Tap "Install app" or "Add to Home screen"</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-secondary">3.</span>
              <span>Tap "Install" when prompted</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-secondary">4.</span>
              <span>The NOC HR app will appear on your home screen!</span>
            </li>
          </ol>
        </div>

        {/* Benefits */}
        <div className="gradient-card rounded-2xl p-6 card-shadow border border-border/50">
          <h3 className="font-bold text-lg mb-4">✨ Benefits of Installing</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 mt-0.5">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Quick Access</p>
                <p className="text-xs text-muted-foreground">Launch directly from your home screen</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 mt-0.5">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Works Offline</p>
                <p className="text-xs text-muted-foreground">Access your data even without internet</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 mt-0.5">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Full Screen Experience</p>
                <p className="text-xs text-muted-foreground">No browser bars, feels like a native app</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 mt-0.5">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Automatic Updates</p>
                <p className="text-xs text-muted-foreground">Always get the latest features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Install;
