// Features1 Component
// Generated: 2025-08-26T23:01:29.688Z
// Template: features-c001
// Context: Signup
// Position: pages.1.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Database, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Clock,
  CheckCircle,
  Headphones,
  Lock
} from "lucide-react"

export default function Features1() {
  const features = [
    {
      icon: Database,
      title: "Real-Time Data Processing",
      description: "Process millions of data points instantly with our advanced streaming analytics engine for immediate insights.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "SOC 2 Type II compliant with end-to-end encryption, role-based access controls, and audit trails.",
      badge: "Security"
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboards",
      description: "Create stunning visualizations with drag-and-drop interface and 50+ chart types for compelling data stories.",
      badge: "Visualization"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Queries",
      description: "Sub-second query performance on datasets up to 100TB with our optimized columnar database architecture.",
      badge: "Speed"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share insights seamlessly with commenting, annotations, and real-time collaborative editing capabilities.",
      badge: "Collaboration"
    },
    {
      icon: Clock,
      title: "Automated Reporting",
      description: "Schedule and deliver personalized reports automatically to stakeholders via email, Slack, or Teams.",
      badge: "Automation"
    },
    {
      icon: CheckCircle,
      title: "Data Quality Monitoring",
      description: "Ensure data integrity with automated validation, anomaly detection, and quality scoring algorithms.",
      badge: "Quality"
    },
    {
      icon: Headphones,
      title: "Expert Implementation",
      description: "Dedicated customer success team provides onboarding, training, and ongoing strategic guidance.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Data Governance",
      description: "Complete data lineage tracking, privacy controls, and compliance management for regulated industries.",
      badge: "Governance"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20 text-primary">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Advanced Analytics
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of data professionals who trust DataFlow Analytics to transform 
            raw data into actionable business intelligence and drive strategic decisions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to unlock the full potential of your enterprise data?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              Create Your Account
            </button>
            <button className="px-8 py-3 border border-secondary/30 text-secondary rounded-lg font-medium hover:bg-secondary/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}