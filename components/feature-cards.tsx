import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const FEATURES = [
  { title: "High Success Rate", desc: "Among the highest IVF success rates in the industry.", icon: "➹" },
  { title: "World Class Care", desc: "Cutting-edge technology and compassionate team.", icon: "🏥" },
  { title: "Top Specialists", desc: "Experienced gynecologists and embryologists.", icon: "👩‍⚕️" },
  { title: "Affordable Treatment", desc: "Transparent pricing with no hidden costs.", icon: "₹" },
  { title: "Holistic Approach", desc: "Mind–body–soul programs to boost outcomes.", icon: "🧘" },
  { title: "Best-in-Class Facilities", desc: "State-of-the-art labs and procedures.", icon: "⚗️" },
]

export function FeatureCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {FEATURES.map((f) => (
        <Card key={f.title} className="relative">
          <div className="absolute left-0 top-0 h-full w-1 bg-primary/70 rounded-l" aria-hidden />
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {f.icon}
              </span>
              {f.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">{f.desc}</CardContent>
        </Card>
      ))}
    </div>
  )
}
