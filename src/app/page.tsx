"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { CalendarCheck, Cookie, Gift, Heart, PieChart, Sparkles, Star, Wheat } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Flavors",
          id: "#flavors",
        },
        {
          name: "Pies",
          id: "#pies",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="JoliePie"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      imagePosition="right"
      title="JoliePie: Artisanal Pies Baked with Love"
      description="Experience the difference of handcrafted pies, made with the freshest ingredients and a passion for perfection. From classic fruit pies to decadent cream creations, every bite is a moment of pure joy."
      buttons={[
        {
          text: "Explore Our Pies",
          href: "#pies",
        },
        {
          text: "Order Custom",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-fruit-tart-plate_23-2148519067.jpg"
      imageAlt="Delicious freshly baked berry pie"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/handsome-man-with-beard-holding-cake-slices-smiling-with-idea-question-pointing-finger-with-happy-face-number-one_839833-3170.jpg",
          alt: "Happy customer Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-satisfied-africanamerican-woman-showing-okay-sign-smiling-recommending-something-good_1258-179439.jpg",
          alt: "Satisfied customer Mark",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-young-indian-woman-loving-dessert_1262-5797.jpg",
          alt: "Delighted customer Emily",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-smiling-woman-shirt-happily-looking-camera-while-eating-chocolate-cake-yellow-background_574295-5388.jpg",
          alt: "Smiling customer David",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-pretty-girl-model-standing-holding-cabbage_114579-74362.jpg",
          alt: "Content customer Jessica",
        },
      ]}
      avatarText="Join 1000+ happy customers!"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Freshly Baked Daily",
          icon: CalendarCheck,
        },
        {
          type: "text-icon",
          text: "Locally Sourced",
          icon: Wheat,
        },
        {
          type: "text-icon",
          text: "Custom Orders",
          icon: Gift,
        },
        {
          type: "text-icon",
          text: "Family Recipes",
          icon: Heart,
        },
        {
          type: "text-icon",
          text: "Taste the Love",
          icon: Cookie,
        },
      ]}
      marqueeSpeed={30}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Our Passion for Perfect Pies"
      description="At JoliePie, we believe in the magic of homemade desserts. Every pie is a labor of love, crafted from scratch using traditional recipes and locally sourced ingredients whenever possible. We're dedicated to bringing you the highest quality and most delicious pies, perfect for any occasion."
      metrics={[
        {
          value: "100%",
          title: "Handmade",
        },
        {
          value: "20+",
          title: "Unique Flavors",
        },
        {
          value: "Fresh",
          title: "Ingredients Daily",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-baker-sprinkles-donuts-with-colorful-sweets_1303-32325.jpg"
      imageAlt="Pastry chef holding a freshly baked pie"
      mediaAnimation="slide-up"
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="flavors" data-section="flavors">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "apple-pie",
          title: "Classic Apple Crumble",
          descriptions: [
            "Our timeless apple pie, featuring thinly sliced, perfectly spiced apples beneath a golden, buttery crumble topping.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-pastry-apples-arrangement_23-2149707963.jpg",
          imageAlt: "Slice of apple pie",
        },
        {
          id: "cherry-pie",
          title: "Sweet Cherry Lattice",
          descriptions: [
            "Bursting with juicy, ripe cherries in a delicate sweet-tart filling, beautifully encased in a classic lattice crust.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-strawberry-cake-baked-with-fresh-red-strawberries-inside-with-pan-light-white-desk-cake-biscuit-fruit-dough-bake_140725-34160.jpg",
          imageAlt: "Whole cherry pie with lattice top",
        },
        {
          id: "pecan-pie",
          title: "Rich Southern Pecan",
          descriptions: [
            "A decadent blend of toasted pecans and sweet, gooey caramel filling, a true Southern comfort dessert.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-apple-pie-assortment_23-2149055414.jpg",
          imageAlt: "Slice of pecan pie",
        },
      ]}
      title="Our Signature Flavors"
      description="Discover a world of taste with our carefully curated selection of pie flavors, each one a masterpiece of taste and texture."
    />
  </div>

  <div id="pies" data-section="pies">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Strawberry Rhubarb",
          price: "$32.00",
          variant: "Seasonal Delight",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-rhubarb-strawberries-gallate-cake-with-ingredients-white-table_181624-43665.jpg",
          imageAlt: "Strawberry Rhubarb Pie",
        },
        {
          id: "p2",
          name: "Chocolate Silk Dream",
          price: "$35.00",
          variant: "Rich & Decadent",
          imageSrc: "http://img.b2bpic.net/free-photo/homemade-cherry-berry-galette_114579-1309.jpg",
          imageAlt: "Chocolate Silk Pie",
        },
        {
          id: "p3",
          name: "Tangy Lemon Meringue",
          price: "$30.00",
          variant: "Classic Refreshment",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-delicious-dessert-picnic_23-2151982822.jpg",
          imageAlt: "Lemon Meringue Pie",
        },
        {
          id: "p4",
          name: "Key Lime Tropical",
          price: "$31.00",
          variant: "Zesty & Refreshing",
          imageSrc: "http://img.b2bpic.net/free-photo/milky-porridge-with-lemon-slices-green-bowl_114579-71130.jpg",
          imageAlt: "Key Lime Pie",
        },
        {
          id: "p5",
          name: "Blueberry Crumb Top",
          price: "$29.00",
          variant: "Sweet & Fruity",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-tasty-homemade-pie-plate_23-2148461048.jpg",
          imageAlt: "Blueberry Crumb Pie",
        },
        {
          id: "p6",
          name: "Pumpkin Spice (Fall)",
          price: "$33.00",
          variant: "Autumn Special",
          imageSrc: "http://img.b2bpic.net/free-photo/sweet-pie-served-with-cup-coffee_114579-61916.jpg",
          imageAlt: "Pumpkin Spice Pie",
        },
      ]}
      title="Explore Our Delicious Pies"
      description="Browse our full selection of artisanal pies, perfect for any celebration or a simple sweet craving."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          role: "Local Food Critic",
          testimonial: "JoliePie's apple crumble is pure heaven! The crust is flaky, and the apple filling is perfectly spiced. It tastes just like grandma used to make, but even better.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-round-pie-with-fruits-cream-dark-background-tea-sugar-cookies-biscuit-cake-sweet_140725-96704.jpg",
          imageAlt: "Sarah J.",
        },
        {
          id: "t2",
          name: "Mark D.",
          role: "Event Planner",
          testimonial: "We ordered several pies for our company event, and they were an absolute hit! Every flavor was exceptional, and the presentation was beautiful. JoliePie is now our go-to for desserts.",
          imageSrc: "http://img.b2bpic.net/free-photo/image-beautiful-africanamerican-woman-looking-with-tempted-smile-delicious-piece-cake-stand_1258-137638.jpg",
          imageAlt: "Mark D.",
        },
        {
          id: "t3",
          name: "Emily R.",
          role: "Happy Customer",
          testimonial: "The chocolate silk pie is to die for! So rich and creamy, it melts in your mouth. I highly recommend JoliePie for anyone looking for an unforgettable dessert experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-holding-cake-slice_23-2149655640.jpg",
          imageAlt: "Emily R.",
        },
        {
          id: "t4",
          name: "David K.",
          role: "Dessert Enthusiast",
          testimonial: "I've tried pies from all over, and JoliePie truly stands out. Their strawberry rhubarb is a seasonal masterpiece – the perfect balance of sweet and tart.",
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-work-having-lunch_23-2148894065.jpg",
          imageAlt: "David K.",
        },
        {
          id: "t5",
          name: "Jessica L.",
          role: "Neighborhood Regular",
          testimonial: "The Key Lime pie transports me straight to a tropical paradise! It's so refreshing and vibrant. JoliePie never disappoints, their quality is consistently amazing.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-feeding-woman-with-croissant-bed_23-2148012227.jpg",
          imageAlt: "Jessica L.",
        },
      ]}
      title="What Our Customers Say"
      description="Hear from our happy customers about their favorite JoliePie experiences."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "standard",
          badge: "Classic",
          badgeIcon: Star,
          price: "$28 - $35",
          subtitle: "Standard 9-inch Pie",
          buttons: [
            {
              text: "View All Flavors",
              href: "#pies",
            },
          ],
          features: [
            "Choice of any standard flavor",
            "Serves 6-8 people",
            "Baked fresh to order",
            "Perfect for family dinners",
          ],
        },
        {
          id: "custom",
          badge: "Premium",
          badgeIcon: Sparkles,
          price: "Custom Quote",
          subtitle: "Bespoke Pie Orders",
          buttons: [
            {
              text: "Get a Quote",
              href: "#contact",
            },
          ],
          features: [
            "Custom flavor combinations",
            "Special dietary requests",
            "Personalized decoration",
            "Ideal for events & catering",
          ],
        },
        {
          id: "mini",
          badge: "Sampler",
          badgeIcon: PieChart,
          price: "$8.00 each",
          subtitle: "Individual Mini Pies",
          buttons: [
            {
              text: "Contact Us",
              href: "#contact",
            },
          ],
          features: [
            "Perfect for individual servings",
            "Available in select flavors",
            "Great for dessert bars",
            "Minimum order quantity applies",
          ],
        },
      ]}
      title="Custom Order Pricing"
      description="From individual treats to large-scale events, JoliePie offers flexible options to satisfy your sweet tooth."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How far in advance should I place my order?",
          content: "We recommend placing orders at least 48 hours in advance for standard pies. For custom or large orders, please provide at least one week's notice to ensure we can accommodate your request.",
        },
        {
          id: "q2",
          title: "Do you offer gluten-free or vegan options?",
          content: "Yes, we are happy to offer select gluten-free and vegan pie options. Please mention your dietary requirements when placing your order, and we will guide you through our available choices.",
        },
        {
          id: "q3",
          title: "What are your delivery and pickup options?",
          content: "We offer local pickup from our bakery during business hours. Delivery services are available within a certain radius for an additional fee. Please contact us for more details regarding delivery availability and costs.",
        },
        {
          id: "q4",
          title: "How should I store my JoliePie?",
          content: "Most of our fruit pies can be stored at room temperature for up to two days. Cream and meringue pies should be refrigerated. Specific storage instructions will be provided with your order.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Have questions about ordering, ingredients, or anything else? We've got answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "downward-rays-animated",
      }}
      tag="Contact Us"
      title="Ready for a Slice of Joy?"
      description="Reach out to us for custom orders, catering inquiries, or any questions about our delicious pies. We're here to help make your dessert dreams come true!"
      inputPlaceholder="Your Email Address"
      buttonText="Send Message"
      termsText="By clicking Send Message, you agree to receive communications from JoliePie."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "About JoliePie",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Our Process",
              href: "#about",
            },
            {
              label: "Ingredients",
              href: "#",
            },
          ],
        },
        {
          title: "Products",
          items: [
            {
              label: "All Pies",
              href: "#pies",
            },
            {
              label: "Seasonal Flavors",
              href: "#flavors",
            },
            {
              label: "Custom Orders",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 JoliePie. All rights reserved."
      bottomRightText="Crafted with passion by JoliePie"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
