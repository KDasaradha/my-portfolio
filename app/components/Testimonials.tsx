// Testimonials.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

const testimonials = [
  {
    name: "John Doe",
    position: "Senior Developer, ABC Tech",
    content:
      "Working with Kesari has been a game changer. His deep expertise in FastAPI and SQLAlchemy ORM ensures that our APIs are not only secure with JWT but also deliver outstanding performance. His relentless curiosity and hands-on experimentation with new technologies have truly elevated our technical standards.",
  },
  {
    name: "Alice Johnson",
    position: "CTO, Innovative Solutions",
    content:
      "Kesari’s innovative mindset and mastery of Python have revolutionized our backend systems. His ability to design robust, scalable APIs—fortified with JWT security—and his constant drive to learn and experiment with emerging technologies is nothing short of inspiring.",
  },
  {
    name: "Bob Martin",
    position: "Project Manager, NextGen Software",
    content:
      "The energy and commitment Kesari brings to every project are infectious. His proficiency in building efficient and secure APIs using FastAPI and SQLAlchemy ORM has significantly boosted our system’s performance. His proactive approach to learning and testing new ideas continuously sets him apart.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">What People Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
