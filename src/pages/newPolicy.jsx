import React from 'react'
import { NewPolicyCard } from '../components/newPolicyCard';
import { Button } from '../components/button';
import { useDispatch } from 'react-redux';
import { setUsers } from '../slices/userSlice';

export const NewPolicy = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = React.useState({
        policyHolderName: "",
        nomineeName: "",
        address: "",
        policyNumber: "",
        phoneNumber: "",
        whatsappNumber: "",
        premiumAmount: "",
        paymentMode: "Monthly"
    });

    const handleChange = (field) => (e) => {
        setFormData({...formData, [field]: e.target.value})
    };

    // React.useEffect(() => {
    //     console.log(formData);
    // },[formData])

    const handleSavePolicy = () => {
        dispatch(setUsers(formData));

        setFormData({
            policyHolderName: "",
            nomineeName: "",
            address: "",
            policyNumber: "",
            phoneNumber: "",
            whatsappNumber: "",
            premiumAmount: "",
            paymentMode: "Monthly"
        });
            
        // console.log("Policy saved to Redux:", formData);
    }

    const handleResetForm = () => {
        setFormData({
        policyHolderName: "",
        nomineeName: "",
        address: "",
        policyNumber: "",
        phoneNumber: "",
        whatsappNumber: "",
        premiumAmount: "",
        paymentMode: "Monthly"
        });
        console.log("Form reset");
    };

    const inputDetails = [
        {
            inputName: "Policy Holder Name",
            placeholderName: "Enter Policy holder name",
            field: "policyHolderName",
            style: "3"
        },
        {
            inputName: "Nominee Name",
            placeholderName: "Enter Nominee name",
            field: "nomineeName",
            style: "3"
        },
        {
            inputName: "Address",
            placeholderName: "Enter Address",
            field: "address",
            style: "24"
        },
        {
            inputName: "Policy Number",
            placeholderName: "Enter Policy number",
            field: "policyNumber",
            style: "3"
        },
        {
            inputName: "Phone Number",
            placeholderName: "Enter Phone number",
            field: "phoneNumber",
            style: "3"
        },
        {
            inputName: "WhatsApp Number",
            placeholderName: "Enter Whatsapp number",
            field: "whatsappNumber",
            style: "3"
        },
        {
            inputName: "Premium Amount",
            placeholderName: "Enter Premium amount",
            field: "premiumAmount",
            style: "3"
        }
    ];
 
  return (
    <div>
        <h1 className="font-inter font-bold text-[32px] text-[#0D141C] pb-5">New Policy Details</h1>
        {/* input details */}
        <div>
            {inputDetails?.map((inputDetail) => (
                <NewPolicyCard 
                    inputName={inputDetail?.inputName}
                    placeholderName={inputDetail?.placeholderName}
                    value={formData[inputDetail?.field]}
                    onChangeFunction={handleChange(inputDetail?.field)}
                    style={inputDetail?.style}
                />
            ))}
            <div>
                <p className="font-inter font-medium text-base text-[#0D141C] pb-3">Mode of Payment</p>
                <div className="pb-8">
                    <select 
                        className="w-1/4 text-base font-normal leading-normal rounded-lg px-4 pl-4 pt-3 pb-3 text-[#0D141C] bg-[#e8edf5] focus:outline-0 focus:ring-0 placeholder:text-[#4A739C] appearance-none"
                        value={formData?.paymentMode}    
                        onChange={handleChange("paymentMode")}
                    >
                        <option  value="" disabled autofocus>Select Payment Mode</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Half-Yearly">Half-Yearly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
            </div>
        </div>

        {/* buttons */}
        <div className="flex justify-end pb-4 pr-28">
            <div className="pr-3">
                <Button 
                    btnName="Save Policy"
                    btnStyle="bg-[#0D80F2] text-[#F7FAFC]"
                    onClick={handleSavePolicy}
                />
            </div>
            <div>
                <Button 
                    btnName="Reset Form"
                    btnStyle="bg-[#E8EDF5] text-[#0D141C]"
                    onClick={handleResetForm}
                />
            </div>
        </div>
    </div>
  )
}