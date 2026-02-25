"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import SeamlessCloud from "@/components/shadcn-space/blocks/hero-02/seamless-cloud";
import { Bath, BedDouble, BookMarked, Car, HandPlatterIcon, GlassWater, Truck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "motion/react";
import {Calendar, PhoneCall} from 'lucide-react'

const propertyFeatures = [
  {
    icon: HandPlatterIcon,
    label: "Dessert First",
    className: "border-e border-b",
  },
  {
    icon: GlassWater,
    label: "Variety of Drinks",
    className: "border-b",
  },
  {
    icon: Truck,
    label: "Order Anytime",
    className: "border-e",
  },
  {
    price: "Ksh 200",
    label: "Anywhere in the City",
    className: "",
  },
];

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef}>
      <div className="bg-[url(/assets/houses/restaurant2.jpg)] bg-cover bg-center repeat-0 overflow-hidden relative flex flex-col xl:h-screen justify-center z-10 xl:gap-0 gap-12">
        <div className="max-w-full mx-auto sm:px-16 px-4 w-full xl:pt-0 pt-32">
          <div className="relative mt-10 text-white text-start z-30">
            <p className="text-inherit text-xs font-normal">Nairobi, Kenya</p>
            <h1 className="text-inherit flex flex-col text-3xl! md:text-4xl! lg:text-5xl! font-normal! max-w-full mt-2 mb-4">
              Enjoy Every<span className="font-semibold!">Meal In Nairobi</span>
            </h1>
            <p className="text-inherit text-medium font-normal max-w-90 mb-6">Get to taste our delicacies and enjoy every moment of your meals.</p>
            <div className="flex gap-2">
              <Button className="px-6 py-3.5 w-37 bg-white border-0 text-black duration-300 hover:bg-white/80 font-medium rounded-full hover:cursor-pointer h-auto">
                <Calendar></Calendar>
                <a href="#">Book a table</a>
              </Button>
              <Button className="px-6 py-3.5 w-35 bg-white border-0 text-black duration-300 hover:bg-white/80 font-medium rounded-full hover:cursor-pointer h-auto">
                <BookMarked></BookMarked>
                <a href="#">View Menu</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="xl:absolute bottom-0 right-0 z-30 xl:w-auto lg:w-4/5 w-full lg:ms-auto">
          <div className="relative">
            <div className="xl:absolute bottom-24 w-full z-0">
            </div>
            <div className="bg-background rounded-t-2xl xl:rounded-none xl:rounded-tl-2xl sm:py-10 py-6 sm:ps-12 ps-4 sm:pe-12 pe-4 xl:pe-60 z-1 relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.05, ease: "easeInOut" }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-0 sm:flex sm:items-center justify-center sm:gap-10 sm:text-center"
              >
                {propertyFeatures.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      duration: 0.05,
                      delay: 0.02 + index * 0.2,
                      ease: "easeInOut",
                    }}
                    className="flex sm:gap-10"
                  >
                    <div
                      className={`flex flex-col items-center gap-3 sm:py-0 sm:px-0 py-5 px-8 sm:border-0 border-gray-200 dark:border-gray-700 w-full ${item.className}`}
                    >
                      {item.icon ? (
                        <>
                          <item.icon
                            size={28}
                            className="text-foreground font-light"
                          />
                          <p className="text-sm font-normal text-muted-foreground">
                            {item.label}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="sm:text-xl text-lg font-semibold text-foreground">
                            {item.price}
                          </p>
                          <p className="text-sm font-normal text-muted-foreground">
                            {item.label}
                          </p>
                        </>
                      )}
                    </div>
                    {index < propertyFeatures.length - 1 && (
                      <Separator
                        orientation="vertical"
                        className="h-12 my-auto sm:block hidden"
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        {/* Clouds */}
        <>
          <SeamlessCloud
            cloudCount={2}
            minSize={400}
            maxSize={678}
            opacity="opacity-60"
            gapMin={100}
            gapMax={500}
            top="top-30 sm:top-20 left-0"
          />
        </>
      </div>
    </section>
  );
};

export default HeroSection;
