import React from "react";
import Macro from "../Macro/Macro"
import UserDashboard from "../UserDashboard/UserDashboard";
import Fat from "../../assets/images/fat-icon.png"
import Carb from "../../assets/images/carbs-icon.png"
import Protein from "../../assets/images/protein-icon.png"
import Calorie from "../../assets/images/calories-icon.png"


function Profile() {
  return (
    <section className="user-information-dashboad">
      <UserDashboard />
      <aside>
        <Macro types="Calories" Amount="1003" macroIcon={Calorie}/>
        <Macro types="Proteine"Amount="2004"macroIcon={Protein} />
        <Macro types="Glucides"Amount="2003"macroIcon={Carb} />
        <Macro types="lipides" Amount="2005"macroIcon={Fat} />
    
      </aside>
    </section>
  );
}

export default Profile;
