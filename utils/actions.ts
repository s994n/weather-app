'use server';

export async function searchCurrentWeather(formData: FormData) {
  'use server';

  const location = formData.get('location');
  console.log(location);
}