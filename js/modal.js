const modal=document.getElementById("cancerModal");
const closeBtn=document.getElementById("closeModal");

const data={

breast:{

title:"Breast Cancer",

icon:"fa-ribbon",

overview:"Breast cancer begins in breast tissue and is one of the most common cancers worldwide. Early detection greatly improves treatment outcomes.",

symptoms:[
"Lump in the breast",
"Change in breast size",
"Skin dimpling",
"Nipple discharge"
],

risks:[
"Family history",
"Age",
"Genetic mutations",
"Obesity"
],

prevention:[
"Regular screening",
"Exercise",
"Healthy weight",
"Limit alcohol"
],

treatment:"Treatment may include surgery, radiation therapy, chemotherapy, hormone therapy, or targeted therapy."

},

lung:{

title:"Lung Cancer",

icon:"fa-lungs",

overview:"Lung cancer develops in the lungs and is strongly associated with tobacco smoking.",

symptoms:[
"Persistent cough",
"Chest pain",
"Shortness of breath",
"Coughing blood"
],

risks:[
"Smoking",
"Passive smoking",
"Air pollution",
"Radon exposure"
],

prevention:[
"Quit smoking",
"Avoid tobacco smoke",
"Exercise",
"Healthy diet"
],

treatment:"Treatment may involve surgery, chemotherapy, radiation therapy, immunotherapy, or targeted therapy."

},

blood:{

title:"Blood Cancer",

icon:"fa-droplet",

overview:"Blood cancers affect blood cells, bone marrow, or the lymphatic system.",

symptoms:[
"Fatigue",
"Frequent infections",
"Easy bruising",
"Swollen lymph nodes"
],

risks:[
"Radiation exposure",
"Genetics",
"Chemical exposure"
],

prevention:[
"Healthy lifestyle",
"Regular medical checkups"
],

treatment:"Treatment may include chemotherapy, stem cell transplantation, immunotherapy, and targeted medicines."

},

brain:{

title:"Brain Cancer",

icon:"fa-brain",

overview:"Brain tumors affect the brain and nervous system.",

symptoms:[
"Headache",
"Seizures",
"Vision problems",
"Memory issues"
],

risks:[
"Radiation",
"Family history"
],

prevention:[
"Routine health checkups",
"Healthy lifestyle"
],

treatment:"Treatment includes surgery, radiation therapy, chemotherapy, and targeted therapy."

}

,

skin:{

title:"Skin Cancer",

icon:"fa-person",

overview:"Skin cancer is the abnormal growth of skin cells, often caused by excessive exposure to ultraviolet (UV) radiation from the sun or tanning beds. Early detection greatly improves treatment success.",

symptoms:[
"New or changing mole",
"Sore that does not heal",
"Itching or bleeding skin lesion",
"Changes in skin color or texture"
],

risks:[
"Excessive UV exposure",
"Fair skin",
"Family history",
"Weakened immune system"
],

prevention:[
"Use sunscreen (SPF 30+)",
"Wear protective clothing",
"Avoid tanning beds",
"Perform regular skin self-examinations"
],

treatment:"Treatment may include surgical removal, cryotherapy, topical medications, radiation therapy, or immunotherapy depending on the stage."

},

stomach:{

title:"Stomach Cancer",

icon:"fa-utensils",

overview:"Stomach (gastric) cancer develops in the lining of the stomach. It often develops slowly over many years and may not cause symptoms in its early stages.",

symptoms:[
"Persistent stomach pain",
"Difficulty swallowing",
"Loss of appetite",
"Unexpected weight loss",
"Nausea or vomiting"
],

risks:[
"Helicobacter pylori infection",
"Smoking",
"Diet high in salty foods",
"Family history"
],

prevention:[
"Eat fresh fruits and vegetables",
"Limit smoked and processed foods",
"Quit smoking",
"Treat H. pylori infection"
],

treatment:"Treatment may include surgery, chemotherapy, radiation therapy, targeted therapy, or immunotherapy."

},

colon:{

title:"Colon Cancer",

icon:"fa-heart-pulse",

overview:"Colon cancer begins in the large intestine (colon). Regular screening can detect precancerous polyps before they develop into cancer.",

symptoms:[
"Blood in stool",
"Persistent diarrhea or constipation",
"Abdominal pain",
"Fatigue",
"Weight loss"
],

risks:[
"Age over 45",
"Family history",
"Obesity",
"Smoking",
"Low-fiber diet"
],

prevention:[
"Eat a high-fiber diet",
"Exercise regularly",
"Maintain a healthy weight",
"Schedule routine colon screening"
],

treatment:"Treatment may include surgery, chemotherapy, radiation therapy, targeted therapy, and immunotherapy."

},

prostate:{

title:"Prostate Cancer",

icon:"fa-user-doctor",

overview:"Prostate cancer develops in the prostate gland and is one of the most common cancers among men. Regular screening can help detect it early.",

symptoms:[
"Difficulty urinating",
"Weak urine flow",
"Blood in urine",
"Pelvic discomfort"
],

risks:[
"Age",
"Family history",
"Obesity",
"Genetic factors"
],

prevention:[
"Maintain a healthy weight",
"Exercise regularly",
"Eat a balanced diet",
"Discuss screening with your healthcare provider"
],

treatment:"Treatment options include active surveillance, surgery, radiation therapy, hormone therapy, chemotherapy, and targeted therapy."

}

};

function openCancerModal(type){

const c=data[type];

if(!c){

alert("Information coming soon.");

return;

}

document.getElementById("modalTitle").innerText=c.title;

document.getElementById("modalSubtitle").innerText="Cancer Awareness Information";

document.getElementById("modalOverview").innerText=c.overview;

document.getElementById("modalTreatment").innerText=c.treatment;

document.getElementById("modalIcon").innerHTML=`<i class="fa-solid ${c.icon}"></i>`;

const symptoms=document.getElementById("modalSymptoms");

symptoms.innerHTML="";

c.symptoms.forEach(item=>{

symptoms.innerHTML+=`<li>${item}</li>`;

});

const risks=document.getElementById("modalRisks");

risks.innerHTML="";

c.risks.forEach(item=>{

risks.innerHTML+=`<li>${item}</li>`;

});

const prevention=document.getElementById("modalPrevention");

prevention.innerHTML="";

c.prevention.forEach(item=>{

prevention.innerHTML+=`<li>${item}</li>`;

});

modal.classList.add("show");

}

closeBtn.onclick=function(){

modal.classList.remove("show");

}

window.onclick=function(e){

if(e.target===modal){

modal.classList.remove("show");

}

}