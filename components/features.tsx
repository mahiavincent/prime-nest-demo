import { ArrowRight, Blocks, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-(--breakpoint-lg) px-6 py-12">
        <h2 className="font-semibold text-3xl leading-10 tracking-tight sm:text-4xl md:text-[40px] md:leading-13">
          Our Menu<br />
          <span className="text-foreground/65">
            Building Smarter and Luxuries Spaces
          </span>
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="col-span-1 rounded-xl bg-muted p-6 md:col-span-2 lg:col-span-1">
            {/* Media 1 Mobile */}
            <div className="mb-6 aspect-video w-full rounded-xl bg-[url(/assets/houses/restaurant1.jpg)] bg-cover bg-center bg-repeat-0 md:hidden" />

            <span className="font-semibold text-xl tracking-tight">
              Table Reservation
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Settings2 className="shrink-0" />
                  <p className="-mt-0.5">
                    You can book a table at anytime in our website and it will be reserved specially for you.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Blocks className="shrink-0" />
                  <p className="-mt-0.5">
                    Enjoy your meal with your collegues and loved ones in your own space.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-8 w-full">
              Book Now <ArrowRight />
            </Button>
          </div>
          {/* Media 1 Desktop */}
          <div className="col-span-1 hidden rounded-xl bg-[url(/assets/houses/restaurant1.jpg)] bg-cover bg-center md:col-span-3 md:block lg:col-span-2" />

          {/* Media 2 Desktop */}
          <div className="col-span-1 hidden rounded-xl bg-[url(/assets/houses/restaurant4.jpg)] bg-cover bg-center md:col-span-3 md:block lg:col-span-2" />

          {/* Card 2 */}
          <div className="col-span-1 rounded-xl bg-muted p-6 md:col-span-2 lg:col-span-1">
            {/* Media 2 Mobile */}
            <div className="mb-6 aspect-video w-full rounded-xl bg-[url(/assets/houses/restaurant4.jpg)] bg-cover bg-center md:hidden" />

            <span className="font-semibold text-xl tracking-tight">
              TakeAway
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Settings2 className="shrink-0" />
                  <p className="-mt-0.5">
                    Order food and drinks at anytime from our website and it will be delivered in your doorstep in minutes.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Blocks className="shrink-0" />
                  <p className="-mt-0.5">
                    You can also track your package from our mobile app, every step of the way.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-8 w-full">
              Order Now <ArrowRight />
            </Button>
          </div>

          {/* Card 3 */}
          <div className="col-span-1 rounded-xl bg-muted p-6 md:col-span-2 lg:col-span-1">
            {/* Media 1 Mobile */}
            <div className="mb-6 aspect-video w-full rounded-xl bg-[url(/assets/houses/restaurant3.jpg)] bg-cover bg-center md:hidden" />

            <span className="font-semibold text-xl tracking-tight">
              Cafe
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Settings2 className="shrink-0" />
                  <p className="-mt-0.5">
                    We also have our own cafe where you can have a nice hot coffee on a chill morning or late nights.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Blocks className="shrink-0" />
                  <p className="-mt-0.5">
                    Have a nice breakfast before starting your day.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-8 w-full">
              View Menu <ArrowRight />
            </Button>
          </div>
          {/* Media 1 Desktop */}
          <div className="col-span-1 hidden rounded-xl bg-[url(/assets/houses/restaurant3.jpg)] bg-cover bg-center md:col-span-3 md:block lg:col-span-2" />
        </div>
      </div>
    </div>
  );
};

export default Features;
