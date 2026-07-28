// Default booking groups shared by the modern lesson-management system.
// These IDs are the canonical IDs used for student routing and IndexedDB seeding.
(function () {
  const groups = [
    { id:'prep1_alamin_sat_tue_1730', name:'مجموعة الأمين - السبت والثلاثاء 5:30', days:'السبت والثلاثاء', time:'5:30', grade:'prep1', price:225, branch:'الأمين', location:'الأمين' },
    { id:'prep1_alamin_sun_wed_1930', name:'مجموعة الأمين - الأحد والأربعاء 7:30', days:'الأحد والأربعاء', time:'7:30', grade:'prep1', price:225, branch:'الأمين', location:'الأمين' },
    { id:'prep1_one_sun_wed_1700', name:'مجموعة سنتر ONE - الأحد والأربعاء 5:00', days:'الأحد والأربعاء', time:'5:00', grade:'prep1', price:225, branch:'سنتر ONE', location:'سنتر ONE' },
    { id:'prep1_total_mon_thu_1600', name:'مجموعة توتال - الاثنين والخميس 4:00', days:'الاثنين والخميس', time:'4:00', grade:'prep1', price:225, branch:'توتال', location:'توتال' },
    { id:'prep2_alamin_sat_tue_1930', name:'مجموعة الأمين - السبت والثلاثاء 7:30', days:'السبت والثلاثاء', time:'7:30', grade:'prep2', price:240, branch:'الأمين', location:'الأمين' },
    { id:'prep2_one_sun_wed_1530', name:'مجموعة سنتر ONE - الأحد والأربعاء 3:30', days:'الأحد والأربعاء', time:'3:30', grade:'prep2', price:240, branch:'سنتر ONE', location:'سنتر ONE' },
    { id:'prep2_total_mon_thu_1730', name:'مجموعة توتال - الاثنين والخميس 5:30', days:'الاثنين والخميس', time:'5:30', grade:'prep2', price:240, branch:'توتال', location:'توتال' },
    { id:'prep2_alamin_mon_thu_2030', name:'مجموعة الأمين - الاثنين والخميس 8:30', days:'الاثنين والخميس', time:'8:30', grade:'prep2', price:240, branch:'الأمين', location:'الأمين' },
    { id:'prep3_alamin_sat_tue_1000', name:'مجموعة الأمين - السبت والثلاثاء 10:00', days:'السبت والثلاثاء', time:'10:00', grade:'prep3', price:255, branch:'الأمين', location:'الأمين' },
    { id:'prep3_one_sun_wed_1400', name:'مجموعة سنتر ONE - الأحد والأربعاء 2:00', days:'الأحد والأربعاء', time:'2:00', grade:'prep3', price:255, branch:'سنتر ONE', location:'سنتر ONE' },
    { id:'prep3_total_mon_thu_1000', name:'مجموعة توتال - الاثنين والخميس 10:00', days:'الاثنين والخميس', time:'10:00', grade:'prep3', price:255, branch:'توتال', location:'توتال' },
    { id:'prep3_spark_sun_wed_2130', name:'مجموعة Center Spark - الأحد والأربعاء 9:30 مساءً', days:'الأحد والأربعاء', time:'9:30 مساءً', grade:'prep3', price:255, branch:'Center Spark', location:'Center Spark' },
    { id:'sec1_alamin_sat_tue_1600', name:'مجموعة الأمين - السبت والثلاثاء 4:00', days:'السبت والثلاثاء', time:'4:00', grade:'1', price:300, branch:'الأمين', location:'الأمين' },
    { id:'sec1_one_sun_wed_1800', name:'مجموعة سنتر ONE - الأحد والأربعاء 6:00', days:'الأحد والأربعاء', time:'6:00', grade:'1', price:300, branch:'سنتر ONE', location:'سنتر ONE' },
    { id:'sec1_total_mon_thu_1930', name:'مجموعة توتال - الاثنين والخميس 7:30', days:'الاثنين والخميس', time:'7:30', grade:'1', price:300, branch:'توتال', location:'توتال' },
    { id:'sec2_alamin_sat_tue_1400', name:'مجموعة الأمين - السبت والثلاثاء 2:00', days:'السبت والثلاثاء', time:'2:00', grade:'2', price:150, branch:'الأمين', location:'الأمين' },
    { id:'sec2_one_sun_wed_2230', name:'مجموعة سنتر ONE - الأحد والأربعاء 10:30 مساءً', days:'الأحد والأربعاء', time:'10:30 مساءً', grade:'2', price:150, branch:'سنتر ONE', location:'سنتر ONE' },
    { id:'sec2_total_mon_thu_1200', name:'مجموعة توتال - الاثنين والخميس 12:00', days:'الاثنين والخميس', time:'12:00', grade:'2', price:150, branch:'توتال', location:'توتال' },
    { id:'sec3_alamin_sat_tue_1200', name:'مجموعة الأمين - السبت والثلاثاء 12:00', days:'السبت والثلاثاء', time:'12:00', grade:'3', price:665, branch:'الأمين', location:'الأمين' },
    { id:'sec3_one_sun_wed_1200', name:'مجموعة سنتر ONE - الأحد والأربعاء 12:00', days:'الأحد والأربعاء', time:'12:00', grade:'3', price:665, branch:'سنتر ONE', location:'سنتر ONE' },
    { id:'sec3_total_mon_thu_1400', name:'مجموعة توتال - الاثنين والخميس 2:00', days:'الاثنين والخميس', time:'2:00', grade:'3', price:665, branch:'توتال', location:'توتال' },
  ];

  window.BOOKING_GROUPS_DEF = groups.map(group => ({ ...group }));
  window.BOOKING_GROUP_IDS = groups.map(group => group.id);
})();
