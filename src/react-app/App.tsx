export default function GroundworksLVWebsite() {
  const services = [
    {
      name: "Basic Service",
      price: "From $50",
      items: ["Mowing", "Weed eating", "Blow off cleanup"],
    },
    {
      name: "Premium Service",
      price: "From $75",
      items: ["Everything in Basic", "Edging", "Trimming", "Pruning"],
    },
  ];

  const sizes = [
    ["Small Yard", "$50", "$75"],
    ["Medium Yard", "$70", "$100"],
    ["Large Yard", "$90", "$125"],
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex rounded-full border border-neutral-300 px-4 py-1 text-sm">
              Groundworks LV
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Straightforward lawn care.
            </h1>
            <p className="max-w-2xl text-lg text-neutral-600 md:text-xl">
              Reliable weekly and recurring lawn service with simple pricing,
              clean results, and no clutter.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@groundworkslv.com"
                className="rounded-2xl bg-neutral-900 px-6 py-3 text-center text-white shadow-sm"
              >
                Get a quote
              </a>
              <a
                href="#pricing"
                className="rounded-2xl border border-neutral-300 px-6 py-3 text-center"
              >
                View pricing
              </a>
            </div>
            <div className="text-sm text-neutral-500">
              Email: hello@groundworkslv.com
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-neutral-200 p-6 shadow-sm">
            <div className="text-lg font-medium">Recurring Focus</div>
            <p className="mt-3 text-neutral-600">
              Built around repeat service and consistent routes.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 p-6 shadow-sm">
            <div className="text-lg font-medium">Clean Pricing</div>
            <p className="mt-3 text-neutral-600">
              Two service tiers. Simple size-based rates.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 p-6 shadow-sm">
            <div className="text-lg font-medium">Extra Services</div>
            <p className="mt-3 text-neutral-600">
              Seeding, weeding, mulching, and sidewalk reclamation available.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
            <p className="mt-3 text-neutral-600">
              Choose a clean maintenance package that fits the property.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-medium">{service.name}</h3>
                  <div className="rounded-full bg-neutral-900 px-4 py-1 text-sm text-white">
                    {service.price}
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-neutral-700">
                  {service.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">Pricing</h2>
          <p className="mt-3 text-neutral-600">
            Base rates by yard size. Final quote depends on condition, access,
            and scope.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-200 shadow-sm">
          <div className="grid grid-cols-3 border-b border-neutral-200 bg-neutral-100 text-sm font-medium md:grid-cols-4">
            <div className="p-4">Yard Size</div>
            <div className="p-4">Basic</div>
            <div className="p-4">Premium</div>
            <div className="hidden p-4 md:block">Best For</div>
          </div>

          {sizes.map(([size, basic, premium]) => (
            <div
              key={size}
              className="grid grid-cols-3 border-b border-neutral-200 last:border-b-0 md:grid-cols-4"
            >
              <div className="p-4 font-medium">{size}</div>
              <div className="p-4">{basic}</div>
              <div className="p-4">{premium}</div>
              <div className="hidden p-4 text-neutral-600 md:block">
                Recurring maintenance
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Get on the schedule.
              </h2>
              <p className="mt-3 max-w-xl text-neutral-300">
                Send the property address, yard size, and the service level you
                want. Response by email.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-neutral-900 shadow-sm">
              <div className="text-sm font-medium uppercase tracking-wide text-neutral-500">
                Contact
              </div>
              <div className="mt-3 text-2xl font-semibold">hello@groundworkslv.com</div>
              <div className="mt-6 text-sm text-neutral-600">
                Replace this section later with your phone number, service area,
                and online quote form.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
