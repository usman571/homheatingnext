import BoilerFilterManufacturer from "@/components/boiler/BoilerFilterManufacturer";
import BoilerFilterSummeryView from "@/components/boiler/BoilerFilterSummeryView";
import BoilerFilterView from "@/components/boiler/BoilerFilterView";

const fetchBoilerData = async () => {
  let itemsPerPage = 1;
  let currentPage = 1;
  let totalPages = 1;
  let unfilteredData = [];

  try {
    console.log("API is calling");

    // Get authentication token
    const tokenResponse = await fetch(
      "https://boilers.megcrm.co.uk/api/GetToken",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("GetToken API Response Status:", tokenResponse.status);

    if (!tokenResponse.ok) {
      throw new Error("Failed to authenticate");
    }

    const tokenData = await tokenResponse.json();
    const authToken = tokenData.data.token;

    console.log("Auth Token:", authToken);

    // Call the boiler data with the token in the header
    const boilerResponse = await fetch(
      `https://boilers.megcrm.co.uk/api/getData?Model_data&condensing=false&per_page=${itemsPerPage}&specific_columns[0]=*&page=${currentPage}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    const boilerData = await boilerResponse.json();
    const totalCount = boilerData.data.total;
    totalPages = Math.ceil(totalCount / itemsPerPage);
    unfilteredData = boilerData.data.data;
  } catch (error) {
    console.error("Error during token generation:", error);
  }
};

const BoilerFilter = async () => {
  const boilerData = await fetchBoilerData();
  console.log(boilerData);
  return (
    <div>
      <div className="w-[1110px] h-[1012px] mx-auto my-10 flex justify-between">
        {/* left side */}
        <BoilerFilterView boilerData={boilerData} />
        {/* <BoilerFilterSummeryView/> */}
        {/* <BoilerDetails/> */}
        {/* Right side */}
        <BoilerFilterManufacturer />
      </div>
    </div>
  );
};

export default BoilerFilter;
