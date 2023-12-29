import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins data couldnt be loaded");
  }
  console.log(data);
  return data;
}

export async function deletCabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins data couldnt be deleted");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImageUrl = newCabin.image?.startsWith?.(supabaseUrl)
  ///1. Creating a new image
  /// we have to give each image an unique name

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
 const imagePath = hasImageUrl? newCabin.image :`${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`
 
 let query = supabase.from("cabins");

 // A) CREATE
 if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

 // B) EDIT
 if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

 const { data, error } = await query.select().single();

 if (error) {
   console.error(error);
   throw new Error("Cabin could not be created");
 }
  // 2. Upload image
  
// const avatarFile = event.target.files[0]
const {  error: storageError } = await supabase
  .storage
  .from('cabins-images')
    .upload(imageName, newCabin.image)
  
  ///3. Delete the cabin If there was an error
  if (storageError)
  {
    
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Image not uploaded cabin not created ");
    
  }
  return data;
}
