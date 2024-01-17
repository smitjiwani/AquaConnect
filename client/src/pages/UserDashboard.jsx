import React from 'react';
import DashCard from '../components/DashCard';


const UserDashboard = () => {
  const data1 = [
    '1. Efficient Water Use: Use a bucket while bathing instead of running the shower to save water. Install water-efficient appliances like low-flow toilets and aerated faucets to reduce water consumption.',
    '2. Rainwater Harvesting: Install gutters on rooftops to collect rainwater. Direct the collected rainwater into storage tanks for later use in gardens or for cleaning purposes.',
    "3. Leak Detection and Repair: Periodically check for any dripping faucets and repair them immediately using a wrench or plumber's tape. Inspect pipes for visible leaks and fix them using pipe sealant or by tightening joints.",
    '4. Afforestation and Watershed Management: Plant native trees and shrubs in your area to promote soil health and groundwater recharge. Work with your neighbors to create check dams or small structures to slow down water runoff during rains.',
  ];

  const data2 = ['1. Safe Drinking Water: Boil water before drinking or use water purification tablets to ensure it\'s safe. Store drinking water in clean, covered containers to prevent contamination.',
  '2. Personal Hygiene: Wash hands with soap and water for at least 20 seconds, especially before meals and after using the toilet. Keep nails trimmed and practice good personal hygiene to prevent the spread of diseases.',
  '3. Sanitation Facilities: Build and maintain proper toilets with septic tanks or use community sanitation facilities. Dispose of waste in designated bins and avoid open defecation to prevent water pollution.',
  '4. Disease Prevention: Attend health camps organized in the community or by NGO’s and government organizations for check-ups and vaccinations. Educate others about the importance of hygiene in preventing diseases like diarrhea and cholera.',
];
  const data3 = ['1. Community Participation: Attend community meetings to discuss water-related issues and solutions. Contribute ideas and opinions on decisions related to water supply management.',
  '2. Maintenance and Repair: Learn basic maintenance tasks for water pumps, such as checking for clogs or repairing minor leaks. Report any issues promptly to the designated authorities.',
  '3. Water Conservation: Share tips on water conservation with neighbors and encourage them to adopt these practices. Organize small events or workshops to discuss the benefits of water conservation within the community.',
  '4. Reporting Issues: Keep an eye out for any water-related problems, such as leaks or contamination. Report issues to local authorities or community leaders, providing details on the problem\'s location and nature.',
  '5. Education and Training: Attend workshops or training sessions organized in the community to learn about sustainable water management. Share knowledge with others, especially with newer community members, to build a collective understanding.',]

  return (
    <div className="">
      <div>UserDashboard</div>
      <div className="">
        <DashCard title="Water Conservation" data={data1} />
        <DashCard title="Hygiene practices" data={data2} />
        <DashCard title="Community roles" data={data3} />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default UserDashboard;