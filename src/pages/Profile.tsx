import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, Phone, Calendar, Briefcase, MapPin, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("personal");

  const personalInfo = {
    nameEn: "Ahmed Mohammed Al-Rashid",
    nameAr: "أحمد محمد الراشد",
    age: 32,
    mobile: "+966 50 123 4567",
    email: "ahmed.alrashid@noc.com",
    address: "King Fahd Road, Riyadh 12345, Saudi Arabia",
    emergencyContact: "+966 50 987 6543",
  };

  const workInfo = {
    jobTitle: "Senior HR Specialist",
    department: "Human Resources",
    lineManager: "Sarah Al-Otaibi",
    startDate: "January 15, 2020",
    employeeId: "NOC-HR-2020-045",
    location: "Riyadh Office",
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="gradient-primary text-white p-6 pb-12 rounded-b-3xl">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 border-4 border-white/20 mb-4">
            <AvatarFallback className="text-2xl bg-white text-primary">
              AM
            </AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold mb-1">{personalInfo.nameEn}</h1>
          <p className="text-xl text-blue-100 mb-2">{personalInfo.nameAr}</p>
          <p className="text-sm text-blue-100">{workInfo.jobTitle}</p>
        </div>
      </div>

      <div className="px-4 -mt-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-card card-shadow">
            <TabsTrigger value="personal" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Personal Info
            </TabsTrigger>
            <TabsTrigger value="work" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Work Info
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-4">
            <Card className="gradient-card card-shadow border-border/50">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-medium">{personalInfo.age} years</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Mobile</p>
                    <p className="font-medium">{personalInfo.mobile}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{personalInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium">{personalInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Emergency Contact</p>
                    <p className="font-medium">{personalInfo.emergencyContact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="work" className="space-y-4">
            <Card className="gradient-card card-shadow border-border/50">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Job Title</p>
                    <p className="font-medium">{workInfo.jobTitle}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Department</p>
                    <p className="font-medium">{workInfo.department}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Line Manager</p>
                    <p className="font-medium">{workInfo.lineManager}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Start Date</p>
                    <p className="font-medium">{workInfo.startDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Employee ID</p>
                    <p className="font-medium">{workInfo.employeeId}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{workInfo.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              className="w-full"
              variant="outline"
              onClick={() => navigate("/competency")}
            >
              View Performance Reviews
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
