const Map = () => {
  return (
    <section id="kart" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4">
            Finn oss
          </h2>
          <p className="text-muted-foreground text-lg">
            Myraunet Gård, 7633 Frosta, Nord-Trøndelag
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border/50 shadow-xl bg-card">
          <div className="relative w-full h-[400px]">
            <iframe
              title="Kart over Myraunet Gård"
              src="https://www.google.com/maps?q=63.607981,10.799314&z=14&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Eller bruk koordinater 63.607981, 10.799314
        </p>
      </div>
    </section>
  );
};

export default Map;
