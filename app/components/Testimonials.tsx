import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

const testimonials = [
  {
    name: "Kesari Dasaradh",
    position: "CTO, TechCorp Inc.",
    content:
      "An exceptional backend developer who consistently delivers high-quality, scalable solutions. Their expertise in Python and FastAPI has been invaluable to our team.",
  },
  {
    name: "Jane Smith",
    position: "Project Manager, InnoSoft Solutions",
    content:
      "Their ability to optimize complex systems and implement efficient microservices architecture has significantly improved our product performance.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">What People Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </CardHeader>
              <CardContent>
                <p className="italic">&ldquo;{testimonial.content}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

