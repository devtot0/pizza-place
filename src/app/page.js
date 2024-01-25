import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            At Crispy Crust, we believe in crafting pizzas that transcend the
            ordinary. Our skilled chefs artfully combine premium ingredients to
            create a symphony of flavors, from classic Margheritas to inventive
            specialties that push the boundaries of pizza perfection. Whether
            you're a traditionalist or an adventurous foodie, our diverse menu
            caters to all tastes and cravings.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+1234567890"
          >
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  );
}
