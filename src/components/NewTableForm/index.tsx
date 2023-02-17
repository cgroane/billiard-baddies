import { PoolTableAutoFillData, Address, Rates } from '@/types';
import React, { useState, useRef, ChangeEvent, useMemo, FormEvent, useCallback } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router';
import { useGoogleAutocomplete } from '@/utils/handleGoogleScriptLoad';
import { Span } from '../shared';

interface NewTableFormProps {}
interface NewTableData extends PoolTableAutoFillData {
  cost: number;
  rate: Rates;
}
const NewTableForm: React.FC<NewTableFormProps> = ({}: NewTableFormProps) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('')
  const {poolTableData, handleChangeManual} = useGoogleAutocomplete(inputRef, {} as NewTableData);
  const [manualFormData, setManualFormData] = useState<{ cost: string; rate: Rates }>({
    cost: '',
    rate: Rates.perGame
  });

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    const {cost, rate} = manualFormData;
    const formData = {
      ...poolTableData,
      cost,
      rate,
      coordinates: {
        lat: poolTableData.geometry?.location?.lat(),
        lng: poolTableData.geometry?.location?.lng()
      }
    };
    const JSONData = JSON.stringify(formData);
    const endpoint = '/api/AddTable';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONData
    }
    try {
      const response = await fetch(endpoint, options)
      const result = await response.json()
    router.push('/');
    } catch (error) {
      setError('Could not add this pool table');
    }
  }

  const handleCostAndRate = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setManualFormData({
      ...manualFormData,
      [name]: value
    })
  };

  const validateAddress = useCallback(() => {
    const addressFields = Object.keys(poolTableData.address);
    let i;
    let isEmpty = true;
    for (i = 0; i < addressFields.length - 1; i ++) {
      if (addressFields[i] !== 'address2' && !poolTableData.address[addressFields[i] as keyof Address].length) {
        isEmpty = true;
        setError('Fill out all required fields')
        break;
      } else {
        isEmpty = false
      }
    }
    return isEmpty;
  }, [poolTableData]);
  const disable = useMemo(() => parseInt(manualFormData.cost as string) < 0 || validateAddress() ? true : false, [manualFormData.cost, validateAddress])
  return (
    <StyledForm onSubmit={submit} >
      <StyledInput defaultValue={undefined} onChange={handleChangeManual} value={poolTableData?.name} name="name" ref={inputRef} placeholder='Name' />
      <StyledInput defaultValue={undefined} onChange={handleChangeManual} value={poolTableData?.address?.address} name="address" placeholder='Address' />
      <StyledInput defaultValue={undefined} onChange={handleChangeManual} value={poolTableData?.address?.address2} name="address2" placeholder='Address Line 2' />
      <StyledInput defaultValue={undefined} onChange={handleChangeManual} value={poolTableData?.address?.city} name="city" placeholder='City' />
      <StyledInput defaultValue={undefined} onChange={handleChangeManual} value={poolTableData?.address?.state} name="state" placeholder='State' />
      <StyledInput defaultValue={undefined} onChange={handleChangeManual} value={poolTableData?.address?.postalCode} name="postalCode" placeholder='Zip' />
      <StyledInput onChange={handleCostAndRate} name="cost" placeholder='Cost' />
      <RadioGroup>
        <label>
          Hourly
          <Radio onChange={handleCostAndRate} name="rate" id="hourly" type="radio" value={Rates.hourly} checked={manualFormData.rate === Rates.hourly}/>
        </label>
        <label>
          Per game
          <Radio onChange={handleCostAndRate} name="rate" id="pergame" type="radio" value={Rates.perGame} checked={manualFormData.rate === Rates.perGame}/>
        </label>
      </RadioGroup>
      <SubmitButton type='submit' disabled={disable} >Add To Map</SubmitButton>
      {error && <Span fontSize='medium' >{error}</Span>}
  </StyledForm>
  )
}
 
const StyledInput = styled.input`
  border: 0.1563rem solid ${props => props.theme.colors.white};
  border-right: none;
  border-left: none;
  margin: 1rem auto;
  width: 70%;
  height: 2.5rem;
  background: none;
  color: white;

  :focus {
    outline: none;
  }
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
  height: 3rem;
  width: 10rem;
  padding: 0.5rem;
  font-size: 1rem;
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 8px;
  border: 0.125rem solid ${props => props.theme.colors.white};
  &:disabled {
    background: #EBEBE4;
    
    color: white
  }
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