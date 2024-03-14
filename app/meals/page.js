import { Suspense } from "react";
import Link from "next/link";

import MealsGrid from "@/components/meals/meals-grid";

import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All Meals",
  description: "Browse the Delicious meals, shared by our vibrant community.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share"> Share your favourite recipy</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
