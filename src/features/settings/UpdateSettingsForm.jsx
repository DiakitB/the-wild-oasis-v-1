import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useEditSetting } from "./useEditSetting";
import { useSetting } from "./useSetting";

// {
//   "id": 1,
//   "created_at": "2023-11-25T01:56:12.759454+00:00",
//   "minBookingLength": 3,
//   "maxBookingLength": 90,
//   "maxGuestsPrice": 8,
//   "breakfastPrice": 15
// }

function UpdateSettingsForm() {
  const {isLoading, settingData:{minBookingLength, maxBookingLength, maxGuestsPrice, breakfastPrice} ={}, error} = useSetting()
 const {editSetting, isSetting} = useEditSetting()
  if(isLoading) return<Spinner/>
  
  function onBlurHandler(e, field) {
    const { value } = e.target
    if(!value) return
    editSetting({[field]: value})
    
 }
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          type='number'
          id='min-nights'
          disabled={isSetting}
          defaultValue={minBookingLength}
          onBlur={(e)=> onBlurHandler(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights'
          disabled={isSetting}
          defaultValue={maxBookingLength}
          onBlur={(e)=> onBlurHandler(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests'
          disabled={isSetting}
          defaultValue={maxGuestsPrice}
          onBlur={(e)=> onBlurHandler(e, "maxGuestsPrice")}
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price'
          defaultValue={breakfastPrice}
          disabled={isSetting}
          onBlur={(e)=> onBlurHandler(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
