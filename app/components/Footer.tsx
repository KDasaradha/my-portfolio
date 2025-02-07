export default function Footer() {
  return (
    <footer className="bg-background border-t py-6">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kesari Dasaradh. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

