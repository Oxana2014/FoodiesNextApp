"use server";

import {redirect} from 'next/navigation'
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  //formData is a FormData object automatically

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
 // console.log(meal);
await saveMeal(meal)
redirect('/meals')
}
