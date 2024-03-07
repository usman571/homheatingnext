import BoilerFilterManufacturer from "@/components/boiler/BoilerFilterManufacturer";
import BoilerFilterSummeryView from "@/components/boiler/BoilerFilterSummeryView";
import BoilerFilterView from "@/components/boiler/BoilerFilterView";
import axios from "axios";

// const fetchToken = async () => {
//   try {
//     console.log("api is calling")
//     const response = await fetch(
//       "https://boilers.megcrm.co.uk/api/GetToken",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log("API Response Status:", response.status);
//     console.log("API Response Body:", await response.text());
//     if (!response.ok) {
//       throw new Error("Failed to authenticate");
//     }

//     const data = await response.json();
//     // const authToken = data.data.token;
//     console.log("auth token")
//     console.log(data);
//     // setToken(authToken);
//   } catch (error) {
//     console.error("Error during token generation:", error);
//   }
// };
const fetchManufacturers = async () => {
  let token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjUxOTkiLCJpYXQiOjE3MDk3MzA2MTcsImV4cCI6MTcxMjMyMjYxN30.pe40mF3uyOUvvREG1AeWTyBmIBClaaMkn86etV-iPGA";
  try {
    const response = await fetch(
      "https://boilers.megcrm.co.uk/api/get-manufacturer",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("API Response Status:", response.status);
    console.log("API Response Status:", response.status);

    // console.log(response);
  } catch (error) {
    console.error("Error fetching manufacturers data:", error);
    // setLoading(false);
  }
};
const BoilerFilter = async () => {
  const token = await fetchManufacturers();
  console.log(token);
  return (
    <div>
      <div className="w-[1110px] h-[1012px] mx-auto my-10 flex justify-between">
        {/* left side */}
        <BoilerFilterView />
        {/* <BoilerFilterSummeryView/> */}
        {/* <BoilerDetails/> */}
        {/* Right side */}
        <BoilerFilterManufacturer />
      </div>
    </div>
  );
};

export default BoilerFilter;
