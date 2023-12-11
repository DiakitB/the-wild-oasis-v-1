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

export async function createNewCabin(newCabin) {
  ///1. Creating a new image
  /// we have to give each image an unique name

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
 const imagePath = `${supabaseUrl}/https://iyqiqzanfhqrpsjpjrtc.supabase.co/storage/v1/object/public/cabins-images/${imageName}`
  // https://iyqiqzanfhqrpsjpjrtc.supabase.co/storage/v1/object/public/cabins-images/cabin-006.jpg?t=2023-12-11T00%3A49%3A22.147Z
  const { data, error } = await supabase
    .from("cabins")
    .insert([{...newCabin, image: imagePath}])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Cabins couldnt be created");
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
    return data;
  }
  
}
