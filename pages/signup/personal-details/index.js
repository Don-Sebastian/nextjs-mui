import Head from "next/head";
import Button from "@mui/material/Button";
import { Paper, Typography } from "@mui/material";
import FormInputText from "@/components/form-components/FormInputText";
import { useForm } from "react-hook-form";
import { userSchema } from "@/Validations/UserValidations";
import { yupResolver } from '@hookform/resolvers/yup';
import FormInputRadio from "@/components/form-components/FormInputRadio";
import FormInputDropdown from "@/components/form-components/FormInputDropdown";
import FormInputMultiCheckbox from "@/components/form-components/FormInputMultiCheckbox";

// const defaultValues = {
//   name: "",
// //   radioValue: "",
// //   checkboxValue: [],
// //   dateValue: new Date(),
// //   dropdownValue: "",
// //   sliderValue: 0,
// };



export default function PersonalDetails() {
 
    const { handleSubmit, reset, control, setValue, watch } = useForm({
       resolver: yupResolver(userSchema)
    });

    const onSubmit = (data) => {
        console.log('helloooo');
        console.log(data, '=========');
    }

    return (
      <>
        <Head>
          <title>Hyring | Personal Details</title>
          <meta name="keywords" content="home" />
        </Head>
        <div className="mt-3 md:mt-10">
          <div className="mx-auto w-[92vw]">
            <div className="flex flex-col my-5 text-center">
              <h1 className="font-bold text-5xl mb-5">Personal Details</h1>
              {/* <div className="flex justify-center items-center">
                <div className="w-[500px] h-[350px] flex justify-center mt-5 border rounded-[10px] bg-orange-300 border-black font-medium text-lg">
                  <div className="w-[500px] flex justify-around">
                    <h1>{user.name}</h1>
                    <span>Profile Pic</span>
                  </div>
                </div>
              </div> */}
              <Paper
                elevation={16}
                style={{
                  display: "grid",
                  gridRowGap: "20px",
                  padding: "20px",
                  margin: "10px 150px",
                }}
              >
                <Typography variant="h6"> Form Demo</Typography>
                <FormInputText
                  name="name"
                  control={control}
                  label="Enter your name"
                />

                <FormInputText
                  name="email"
                  control={control}
                  label="Enter your email"
                />

                <FormInputRadio
                  name="gender"
                  control={control}
                  label="Select Gender"
                />

                <FormInputDropdown
                  name="jobrole"
                  control={control}
                  label="Select your role"
                />

                <FormInputMultiCheckbox
                  control={control}
                  setValue={setValue}
                  name={"checkboxValue"}
                  label={"Checkbox Input"}
                />

                <Button onClick={handleSubmit(onSubmit)} variant="outlined">
                  Submit
                </Button>
              </Paper>
            </div>
          </div>
        </div>
      </>
    );
}