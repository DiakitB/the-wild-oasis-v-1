import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin} from "../../services/apiCabins";
import toast from "react-hot-toast";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";





const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({cabinData = {}, onCloseModel}) {

  
  const { id: dataId, ...editeData } = cabinData
  const isEditSession = Boolean(dataId)
  
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editeData: {}
  });
  const { errors } = formState


  
  
  const queryClient = useQueryClient();


  const { createNewCabin, isCreating } = useCreateCabin();

  const{editCabin, isEditing} = useEditCabin()


  

  const isWorking = isCreating || isEditing
  

  function onSubmit(data) {
  
    const image = typeof data.image === "string" ? data.image : data.image[0]
    if(isEditSession)
      editCabin({ newCabinData: { ...data, image }, id: dataId }, {
        onSuccess: (data) => {
          console.log(data)
          reset()
        }
      });
    else createNewCabin({ ...data, image: image }, {
      onSuccess: (data) => {
        console.log(data)
        reset()
        onCloseModel?.()
      }
    })
  }
  function onError(errors) {
    console.log(errors)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
        disabled={isWorking}
          {...register("name", { required: "This field is required" })} />
        {errors?.name?.message && <Error>{errors.name.message }</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input type="number" id="maxCapacity"  disabled={isWorking}{...register("maxCapacity", { required: "This field is required" })} />
        {errors?.name?.message && <Error>{errors.name.message }</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input type="number" id="regularPrice"  disabled={isWorking}{...register("regularPrice", { required: "This field is required" })} />
        {errors?.name?.message && <Error>{errors.name.message }</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {required: "This field is required"})}
        />
         {errors?.name?.message && <Error>{errors.name.message }</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description" , {required: "This field is required"})}
        />
         {errors?.name?.message && <Error>{errors.name.message }</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image"  disabled={isWorking} accept="image/*"  {...register("image", { required: isEditSession ? false :"This field is required"})} />
        {errors?.name?.message && <Error>{errors.name.message }</Error>}
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset"  disabled={isWorking} onClick={()=>onCloseModel?.()}>
          Cancel
        </Button>
        <Button  disabled={isWorking} > { isEditSession ? "Edit Cabin" : "Create new Cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;