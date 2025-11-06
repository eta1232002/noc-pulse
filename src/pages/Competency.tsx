import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Award } from "lucide-react";

const Competency = () => {
  const competencies = [
    {
      category: "Technical Skills",
      skills: [
        { name: "HR Management Systems", level: 85, status: "Advanced" },
        { name: "Data Analysis", level: 75, status: "Proficient" },
        { name: "Microsoft Office Suite", level: 90, status: "Expert" },
        { name: "Recruitment Tools", level: 80, status: "Advanced" },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Communication", level: 90, status: "Expert" },
        { name: "Leadership", level: 75, status: "Proficient" },
        { name: "Problem Solving", level: 85, status: "Advanced" },
        { name: "Team Collaboration", level: 88, status: "Advanced" },
      ],
    },
    {
      category: "Domain Knowledge",
      skills: [
        { name: "HR Policies & Compliance", level: 92, status: "Expert" },
        { name: "Performance Management", level: 80, status: "Advanced" },
        { name: "Employee Relations", level: 85, status: "Advanced" },
        { name: "Talent Development", level: 70, status: "Proficient" },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Expert":
        return "bg-green-500/10 text-green-700 border-green-500/20";
      case "Advanced":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      case "Proficient":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="gradient-primary text-white p-6 pb-8 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-1">Competency Profile</h1>
        <p className="text-blue-100">Your skills and expertise</p>
      </div>

      <div className="px-4 space-y-6 -mt-4">
        {/* Overall Summary */}
        <Card className="gradient-card card-shadow border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Overall Competency Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">82%</div>
                <p className="text-sm text-muted-foreground">Advanced Level Professional</p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">6</div>
                  <p className="text-xs text-muted-foreground">Expert</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <p className="text-xs text-muted-foreground">Advanced</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">4</div>
                  <p className="text-xs text-muted-foreground">Proficient</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Competency Categories */}
        {competencies.map((category) => (
          <section key={category.category}>
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">{category.category}</h2>
            </div>
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <Card key={skill.name} className="gradient-card card-shadow border-border/50">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold">{skill.name}</h3>
                        <Badge variant="outline" className={getStatusColor(skill.status)}>
                          {skill.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <Progress value={skill.level} className="h-2" />
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Proficiency</span>
                          <span className="font-medium text-primary">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Growth Areas */}
        <Card className="gradient-card card-shadow border-border/50 mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Recommended Growth Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Talent Development strategies</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Advanced leadership techniques</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Strategic HR planning</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Competency;
