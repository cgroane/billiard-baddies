import { PoolTableAutoFillData, useGoogleAutocomplete } from '@/utils/handleGoogleScriptLoad';
import React, { useState, useRef, useEffect, SyntheticEvent } from 'react'
import styled from 'styled-components'
 
export enum Rates  {
  'hourly' = 'Hourly',
  'perGame' = 'Per Game'
}

interface NewTableFormProps {}
interface NewTableData extends PoolTableAutoFillData {
  cost: number;
  rate: Rates;
}
const NewTableForm: React.FC<NewTableFormProps> = ({}: NewTableFormProps) => {
  const [poolTableFormData, setPoolTableFormData] = useState<NewTableData>({} as NewTableData)

  const inputRef = useRef<HTMLInputElement>(null);
  const poolTableInfo = useGoogleAutocomplete(inputRef, {} as NewTableData);
  useEffect(() => {
    if (poolTableInfo) {
      setPoolTableFormData({
        ...poolTableFormData,
        ...poolTableInfo
      })
    }
  }, [poolTableInfo]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPoolTableFormData({
      ...poolTableFormData,
      [name]: value
    })
  }
  return (
    <StyledForm>
      <StyledInput defaultValue={undefined} value={poolTableFormData?.name} onChange={onChange} name="name" ref={inputRef} placeholder='Name' />
      <StyledInput defaultValue={undefined} value={poolTableFormData?.address?.address} onChange={onChange} name="address" placeholder='Address' />
      <StyledInput defaultValue={undefined} value={poolTableFormData?.address?.address2} onChange={onChange} name="address2" placeholder='Address Line 2' />
      <StyledInput defaultValue={undefined} value={poolTableFormData?.address?.city} onChange={onChange} name="city" placeholder='City' />
      <StyledInput defaultValue={undefined} value={poolTableFormData?.address?.state} onChange={onChange} name="state" placeholder='State' />
      <StyledInput defaultValue={undefined} value={poolTableFormData?.address?.postalCode} onChange={onChange} name="postalCode" placeholder='Zip' />
      {/* <StyledInput value={poolTableFormData.cost} onChange={onChange} name="cost" placeholder='Cost' /> */}
      <RadioGroup>
        <label>
          Hourly
          <Radio id="hourly" type="radio" value={Rates.hourly}/>
        </label>
        <label>
          Per game
          <Radio id="pergame" type="radio" value={Rates.perGame}/>
        </label>
      </RadioGroup>
      <SubmitButton>Add To Map</SubmitButton>
  </StyledForm>
  )
}
 
const StyledInput = styled.input`
    border-right: none;
    border-left: none;
    margin: 1rem auto;
    width: 70%;
`
const StyledForm = styled.form`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SubmitButton = styled.button`
  height: 4rem;
  width: 10rem;
  padding: 0.5rem;
  font-size: 1rem;
`
const RadioGroup = styled.div`
    margin: 1rem auto;
    width: 70%;
    display: flex;
    justify-content: space-evenly;
`
const Radio = styled.input`
  
`

export default NewTableForm
 
NewTableForm.displayName = "NewTableForm"