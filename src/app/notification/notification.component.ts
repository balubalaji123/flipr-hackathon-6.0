import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.data_modifier();
    this.updateData();
  }

  public api_data = 
    {
      "success": true,
      "data": {
        "notifications": [
          {
            "title": "PIB",
            "link": "https://pib.gov.in/newsite/pmreleases.aspx?mincode=31"
          },
          {
            "title": "02.08.2020 Revised guidelines for International Arrivals",
            "link": "https://www.mohfw.gov.in/pdf/RevisedguidelinesforInternationalArrivals02082020.pdf"
          },
          {
            "title": "24.05.2020 Guidelines for international arrivals",
            "link": "https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals.pdf"
          },
          {
            "title": "24.05.2020 Guidelines for domestic travel (air/train/inter-state bus travel)",
            "link": "https://www.mohfw.gov.in/pdf/Guidelinesfordomestictravel(airortrainorinter-statebustravel).pdf"
          },
          {
            "title": "20.03.2020 Instructions to all major and minor ports for dealing with(COVID-19)",
            "link": "https://www.mohfw.gov.in/pdf/DGSOrder04of2020.pdf"
          },
          {
            "title": "19.03.2020 Additional Travel Advisory",
            "link": "https://www.mohfw.gov.in/pdf/Traveladvisory.pdf"
          },
          {
            "title": "18.03.2020 Standard Operating Procedure for Passenger Movement post Disembarkation",
            "link": "https://www.mohfw.gov.in/pdf/SOPQuarantineofPassengers.pdf"
          },
          {
            "title": "17.03.2020 Additional Travel Advisory",
            "link": "https://www.mohfw.gov.in/pdf/TravelAdvisory17thMarch.pdf"
          },
          {
            "title": "16.03.2020 Additional Travel Advisory",
            "link": "https://www.mohfw.gov.in/pdf/TravelAdvisory16thMarch.pdf"
          },
          {
            "title": "14.03.2020 Restrictions on International passenger traffic through Land Check Posts",
            "link": "https://www.mohfw.gov.in/pdf/NewinstructionsDt14032020Restirctiononinternationalpassengertraffic.pdf"
          },
          {
            "title": "13.03.2020 Restrictions on International passenger traffic through land check posts-COVID 19",
            "link": "https://www.mohfw.gov.in/pdf/GuidelinesDT13032020.pdf"
          },
          {
            "title": "11.03.2020 Consolidated Travel Advisory - 11 March 2020",
            "link": "https://www.mohfw.gov.in/pdf/ConsolidatedTraveladvisoryUpdated11032020.pdf"
          },
          {
            "title": "11.03.2020 Visa restrictions issued by Bureau of Immigration (BOI) after meeting of GoM on COVID19 - 11 March 2020",
            "link": "https://www.mohfw.gov.in/pdf/VisarestrictionsrelatedtoCOVID19Ministries.pdf"
          },
          {
            "title": "11.03.2020 Decisions- High level Group of Ministers meeting to review current status and actions for prevention and management of COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/HFWnCoVGoM11March2020II.pdf"
          },
          {
            "title": "10.03.2020 Standard Operating Procedure (SOP) for COVID-19 Management- International Cruise Ships at major Indian Ports",
            "link": "https://www.mohfw.gov.in/pdf/InternationalCruiseShipsSOPforCovid19.pdf"
          },
          {
            "title": "10.03.2020 Additional Travel Advisory",
            "link": "https://www.mohfw.gov.in/pdf/AdditionalTravelAdvisory10032020.pdf"
          },
          {
            "title": "10.03.2020 Travel Advisory (Home Isolation)",
            "link": "https://www.mohfw.gov.in/pdf/AdditionalTravelAdvisory1homeisolation.pdf"
          },
          {
            "title": "06.03.2020 Travel Advisory",
            "link": "https://www.mohfw.gov.in/pdf/DraftTraveladvisorytotravelersUpdated06032020.pdf"
          },
          {
            "title": "05.03.2020 Travel Advisory",
            "link": "https://www.mohfw.gov.in/pdf/TravelAdvisory5thMarch.pdf"
          },
          {
            "title": "03.03.2020 Travel and Visa restrictions related to COVID-19 in respect of Bureau of Immigration",
            "link": "https://boi.gov.in/content/advisory-travel-and-visa-restrictions-related-covid-19"
          },
          {
            "title": "02.03.2020 Travel Advisory",
            "link": "https://www.mohfw.gov.in/pdf/Consolidated%20Travel%20advisory%20to%20travelers%20Updated%2002032020.pdf"
          },
          {
            "title": "26.02.2020 Travel Advisory",
            "link": "https://www.mohfw.gov.in/pdf/Consolidated%20Travel%20advisory%20to%20travelers%20Updated%2026-02-2020.pdf"
          },
          {
            "title": "05.02.2020 Travel Advisory",
            "link": "https://www.mohfw.gov.in/pdf/Traveladvisory05022020.pdf"
          },
          {
            "title": "25.01.2020 Travel Advisory",
            "link": "https://www.mohfw.gov.in/pdf/TraveladvisorytotravelersvisitingChina25012020.pdf"
          },
          {
            "title": "17.01.2020 Travel Advisory",
            "link": "https://www.mohfw.gov.in/pdf/TraveladvisorytotravelersvisitingChina17012020.pdf"
          },
          {
            "title": "01.04.2020 Taking care of mental health of children during COVID - 19",
            "link": "https://www.mohfw.gov.in/pdf/mentalhealthchildrean.pdf"
          },
          {
            "title": "01.04.2020 Taking care of mental health of elderly during COVID -19",
            "link": "https://www.mohfw.gov.in/pdf/mentalhealthelderly.pdf"
          },
          {
            "title": "01.04.2020 Psychosocial issues among migrants during COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/RevisedPsychosocialissuesofmigrantsCOVID19.pdf"
          },
          {
            "title": "31.03.2020 Minding our minds during the COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/MindingourmindsduringCoronaeditedat.pdf"
          },
          {
            "title": "17.07.2020 Advisory for Gated Residential Complexes with regards to COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/AdvisoryforRWAsonCOVID19.pdf"
          },
          {
            "title": "17.07.2020 Guidelines for Gated Residential Complexes Desirous of Setting Up Small Covid Care Facility by Resident Welfare Associations / Residential Societies / Non-Governmental Organizations (NGOs)",
            "link": "https://www.mohfw.gov.in/pdf/CovidCareFacilityinGatedcomplexes.pdf"
          },
          {
            "title": "13.07.2020 Fixation of rate for rt PCR Test for COVID-19 in respect of Central Services (Medical Attendance) beneficiaries",
            "link": "https://www.mohfw.gov.in/pdf/OMregfixationofCOVIDtestorCSMAbeneficiaries.pdf"
          },
          {
            "title": "04.06.2020 SOP on preventive measures in Restaurants to contain spread of COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/3SoPstobefollowedinRestaurants.pdf"
          },
          {
            "title": "18.05.2020 Guidelines on preventive measures to contain spread of COVID-19 in workplace settings",
            "link": "https://www.mohfw.gov.in/pdf/GuidelinesonpreventivemeasurestocontainspreadofCOVID19inworkplacesettings.pdf"
          },
          {
            "title": "18.05.2020 Revised Strategy for COVlD-19 testing in lndia",
            "link": "https://www.mohfw.gov.in/pdf/Revisedtestingguidelines.pdf"
          },
          {
            "title": "18.04.2020 EoI cum Bid Document for Procurement of Medical Oxygen Cylinder on urgent basis during COVID 19 situation",
            "link": "https://www.mohfw.gov.in/pdf/MedicalOxygenCylinder.pdf"
          },
          {
            "title": "05.04.2020 Guidelines for Quarantine facilities COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/90542653311584546120quartineguidelines.pdf"
          },
          {
            "title": "03.04.2020 Advisory & Manual on use of Homemade Protective Cover for Face & Mouth",
            "link": "https://www.mohfw.gov.in/pdf/Advisory&ManualonuseofHomemadeProtectiveCoverforFace&Mouth.pdf"
          },
          {
            "title": "03.04.2020 DO Letter of Secretary, Ministry of Human Resource Development for Arogya Setu App, and Light Candle at 09:00 PM on 5 April 2020 for 9 Minute.",
            "link": "https://www.mohfw.gov.in/pdf/DOSecyHRD.pdf"
          },
          {
            "title": "01.04.2020 Guidelines for Dialysis of COVID – 19 patients",
            "link": "https://www.mohfw.gov.in/pdf/GuidelinesforDialysisofCovid19Patients.pdf"
          },
          {
            "title": "29.03.2020 Health Advisory for Elderly Population of India during COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/AdvisoryforElderlyPopulation.pdf"
          },
          {
            "title": "29.03.2020 Guidelines on disinfection of common public places including offices",
            "link": "https://www.mohfw.gov.in/pdf/Guidelinesondisinfectionofcommonpublicplacesincludingoffices.pdf"
          },
          {
            "title": "27.03.2020 Office Memorandum-CGHS-Reimbursement of OPD Medicines Special Sanction in view of COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/OM27march2020.pdf"
          },
          {
            "title": "27.03.2020 Office Order-CGHS-Guidelines in view of the Corona Virus (COVID-19) Infection-issue of medicines",
            "link": "https://www.mohfw.gov.in/pdf/officeorder20032020.pdf"
          },
          {
            "title": "27.03.2020 Office Order-CGHS-Guidelines in View of COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/officeorder18032020.pdf"
          },
          {
            "title": "26.03.2020 Gazette Notification - Hydroxychloroquine now a schedule H1 drug, can be sold on prescription only",
            "link": "https://www.mohfw.gov.in/pdf/218927g.pdf"
          },
          {
            "title": "26.03.2020 Press Note on Pradhan Mantri Garib Kalyan Yojna package from Ministry of Finance",
            "link": "https://www.mohfw.gov.in/pdf/MoFPMGaribKalyanYojanaPackage.pdf"
          },
          {
            "title": "16.03.2020 Advisory - Social Distancing",
            "link": "https://www.mohfw.gov.in/pdf/SocialDistancingAdvisorybyMOHFW.pdf"
          },
          {
            "title": "15.03.2020 Guidelines on Dead Body Management",
            "link": "https://www.mohfw.gov.in/pdf/1584423700568_COVID19GuidelinesonDeadbodymanagement.pdf"
          },
          {
            "title": "11.03.2020 Guidelines for home quarantine",
            "link": "https://www.mohfw.gov.in/pdf/Guidelinesforhomequarantine.pdf"
          },
          {
            "title": "11.03.2020 Guidelines on use of masks by public",
            "link": "https://www.mohfw.gov.in/pdf/Useofmaskbypublic.pdf"
          },
          {
            "title": "05.03.2020 Advisory - Mass Gatherings",
            "link": "https://www.mohfw.gov.in/pdf/advisoryformassgathering.pdf"
          },
          {
            "title": "22.05.2020 Revised advisory on the use of Hydroxychloroquine (HCQ) as prophylaxis for COVID-19 infection",
            "link": "https://www.mohfw.gov.in/pdf/RevisedadvisoryontheuseofhydroxychloroquineasprophylaxisforSARSCOVID19infection.pdf"
          },
          {
            "title": "21.05.2020 Guidance note for Immunization services during and post COVID outbreak",
            "link": "https://www.mohfw.gov.in/pdf/3ImmunizationServicesduringCOVIDOutbreakSummary150520202.pdf"
          },
          {
            "title": "19.05.2020 Guidelines for Dental Professionals in Covid-19 situation",
            "link": "https://www.mohfw.gov.in/pdf/DentalAdvisoryF.pdf"
          },
          {
            "title": "18.05.2020 Revised Strategy for COVlD-19 testing in lndia",
            "link": "https://www.mohfw.gov.in/pdf/Revisedtestingguidelines.pdf"
          },
          {
            "title": "07.04.2020 Revised Guidelines for Dialysis of COVID – 19 patients",
            "link": "https://www.mohfw.gov.in/pdf/RevisedGuidelinesforDialysisofCOVID19Patients.pdf"
          },
          {
            "title": "05.04.2020 Guidelines for Quarantine facilities COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/90542653311584546120quartineguidelines.pdf"
          },
          {
            "title": "26-03-2020 Gazette Notification - Hydroxychloroquine now a schedule H1 drug, can be sold on prescription only",
            "link": "https://www.mohfw.gov.in/pdf/218927g.pdf"
          },
          {
            "title": "24-03-2020 Letter from Ministry of Consumer Affairs, Food & Public Distribution to States to take appropriate measures to ensure the availability of Ethyl Alcohol/Ethanol/ENA to the manufacturers of hand sanitizers in order to contain Corona Virus COVID- l9",
            "link": "https://www.mohfw.gov.in/pdf/ReviewofpricesofEssentialCommodities.pdf"
          },
          {
            "title": "20-03-2020 Advisory for Hospitals and Medical Institutions",
            "link": "https://www.mohfw.gov.in/pdf/AdvisoryforHospitalsandMedicalInstitutions.pdf"
          },
          {
            "title": "15-03-2020 SOP for Mock Drill on 22nd March 2020 for Hospital Preparedness",
            "link": "https://www.mohfw.gov.in/pdf/MockDrill.pdf"
          },
          {
            "title": "05.09.2020 Manual for Surveillance Teams for containment zones",
            "link": "https://www.mohfw.gov.in/pdf/ManualforSurveillanceTeamsforcontainmentzones.pdf"
          },
          {
            "title": "02.08.2020 Revised guidelines for International Arrivals",
            "link": "https://www.mohfw.gov.in/pdf/RevisedguidelinesforInternationalArrivals02082020.pdf"
          },
          {
            "title": "17.07.2020 Advisory for Gated Residential Complexes with regards to COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/AdvisoryforRWAsonCOVID19.pdf"
          },
          {
            "title": "17.07.2020 Guidelines for Gated Residential Complexes Desirous of Setting Up Small Covid Care Facility by Resident Welfare Associations / Residential Societies / Non-Governmental Organizations (NGOs)",
            "link": "https://www.mohfw.gov.in/pdf/CovidCareFacilityinGatedcomplexes.pdf"
          },
          {
            "title": "04.06.2020 SOP on preventive measures in Restaurants to contain spread of COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/3SoPstobefollowedinRestaurants.pdf"
          },
          {
            "title": "24.05.2020 Guidelines for international arrivals",
            "link": "https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals.pdf"
          },
          {
            "title": "24.05.2020 Guidelines for domestic travel (air/train/inter-state bus travel)",
            "link": "https://www.mohfw.gov.in/pdf/Guidelinesfordomestictravel(airortrainorinter-statebustravel).pdf"
          },
          {
            "title": "22.05.2020 Revised advisory on the use of Hydroxychloroquine (HCQ) as prophylaxis for COVID-19 infection",
            "link": "https://www.mohfw.gov.in/pdf/RevisedadvisoryontheuseofhydroxychloroquineasprophylaxisforSARSCOVID19infection.pdf"
          },
          {
            "title": "21.05.2020 Guidance note for Immunization services during and post COVID outbreak",
            "link": "https://www.mohfw.gov.in/pdf/3ImmunizationServicesduringCOVIDOutbreakSummary150520202.pdf"
          },
          {
            "title": "18.05.2020 Guidelines on preventive measures to contain spread of COVID-19 in workplace settings",
            "link": "https://www.mohfw.gov.in/pdf/GuidelinesonpreventivemeasurestocontainspreadofCOVID19inworkplacesettings.pdf"
          },
          {
            "title": "18.05.2020 Revised Strategy for COVlD-19 testing in lndia",
            "link": "https://www.mohfw.gov.in/pdf/Revisedtestingguidelines.pdf"
          },
          {
            "title": "16.05.2020 Updated Cluster Containment Plan for COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/Containmentplan16052020.pdf"
          },
          {
            "title": "05.04.2020 Guidelines for Quarantine facilities COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/90542653311584546120quartineguidelines.pdf"
          },
          {
            "title": "03.04.2020 Request to States/UTs to provide support to ICMR Labs doing COVID-19 Testing",
            "link": "https://www.mohfw.gov.in/pdf/Covid19DOtoStatesSupportLabinrealtimeupdate.pdf"
          },
          {
            "title": "03.04.2020 DO Letter of Secretary, Ministry of Human Resource Development for Arogya Setu App, and Light Candle at 09:00 PM on 5 April 2020 for 9 Minute",
            "link": "https://www.mohfw.gov.in/pdf/DOSecyHRD.pdf"
          },
          {
            "title": "18.05.2020 Guidelines on preventive measures to contain spread of COVID-19 in workplace settings",
            "link": "https://www.mohfw.gov.in/pdf/GuidelinesonpreventivemeasurestocontainspreadofCOVID19inworkplacesettings.pdf"
          },
          {
            "title": "29-03-2020 Guidelines on disinfection of common public places including offices",
            "link": "https://www.mohfw.gov.in/pdf/Guidelinesondisinfectionofcommonpublicplacesincludingoffices.pdf"
          },
          {
            "title": "19-03-2020 DOPT OM - Preventive measures to contain the spread of COVID-19 in Training Institutes",
            "link": "https://www.mohfw.gov.in/pdf/InstructionsforTrainingInstitutes.pdf"
          },
          {
            "title": "18-03-2020 Directives from MoHRD for all Educational Institutions and Examination Boards regarding precautions to be taken in light of COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/DOSecyHE.pdf"
          },
          {
            "title": "18.03.2020 DoPT OM - Preventive measures to be taken to contain the spread of Novel Coronavirus (COVID-19)",
            "link": "https://www.mohfw.gov.in/pdf/PreventivemeasuresDOPT.pdf"
          },
          {
            "title": "18.03.2020 DO Letter from Secretary, DoHFW to State Chief Secretaries regarding Social Distancing Measures",
            "link": "https://www.mohfw.gov.in/pdf/Letterdated2032020toCSs.pdf"
          },
          {
            "title": "06.03.2020 Advisory for Exemption to mark biometric attendance in AEBAS",
            "link": "https://www.mohfw.gov.in/pdf/advisoryforbiometricattendance.pdf"
          },
          {
            "title": "12.06.2020 Guidelines for Hotels on preventive measures to contain spread of COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/HotelsGuidelines11thJune.pdf"
          },
          {
            "title": "1. &nbsp; What is Corona Virus and how does it transmits",
            "link": "https://www.mohfw.gov.in/pdf/CoronaVirus.pptx"
          },
          {
            "title": "2. &nbsp; Handwashing",
            "link": "https://www.mohfw.gov.in/pdf/Handwash.pptx"
          },
          {
            "title": "3. &nbsp; COVID Appropriate Behaviours",
            "link": "https://www.mohfw.gov.in/pdf/PreventiveMeasures.pptx"
          },
          {
            "title": "4. &nbsp; Home Quarantine",
            "link": "https://www.mohfw.gov.in/pdf/HomeQuarantine.pptx"
          },
          {
            "title": "5. &nbsp; Myth Busters",
            "link": "https://www.mohfw.gov.in/pdf/MythBusters.pptx"
          },
          {
            "title": "6. &nbsp; All India National Helpline 1075",
            "link": "https://www.mohfw.gov.in/pdf/1075.pptx"
          },
          {
            "title": "7. &nbsp; No Spitting",
            "link": "https://www.mohfw.gov.in/pdf/NoSpitting.pptx"
          },
          {
            "title": "8. &nbsp; Stigma and Discrimination",
            "link": "https://www.mohfw.gov.in/pdf/Stigma&Discrimination.pptx"
          },
          {
            "title": "9. &nbsp; Thank you COVID Warriors",
            "link": "https://www.mohfw.gov.in/pdf/ThankYouCOVIDWarriors.pptx"
          },
          {
            "title": "31.03.2020 Handling Public Grievances pertaining to COVID-19 in M/o Health & Family Welfare",
            "link": "https://www.mohfw.gov.in/pdf/MoHFWCOVIDNODALOFFICER.pdf"
          },
          {
            "title": "29.03.2020 Poster on Social distancing in a market place during COVID-19 English",
            "link": "https://www.mohfw.gov.in/pdf/socialdistancingEnglish.pdf"
          },
          {
            "title": "29.03.2020 Poster on Social distancing in a market place during COVID-19 Hindi",
            "link": "https://www.mohfw.gov.in/pdf/socialdistancingHindi.pdf"
          },
          {
            "title": "1. &nbsp; A letter from HFM to the Health Administrators",
            "link": "https://www.mohfw.gov.in/pdf/HFMLettergeneralawarness.pdf"
          },
          {
            "title": "2. &nbsp;Community leaflet",
            "link": "https://www.mohfw.gov.in/pdf/LeafletGHFandDHGA.pdf"
          },
          {
            "title": "3.&nbsp; What is Novel Coronavirus?",
            "link": "https://www.mohfw.gov.in/pdf/Poster1GHFanDHGA.pdf"
          },
          {
            "title": "4.&nbsp;Is your Healthcare facility ready to manage patients with COVID-19?",
            "link": "https://www.mohfw.gov.in/pdf/Poster2GHFGA.pdf"
          },
          {
            "title": "5.&nbsp;How to use the handrub?",
            "link": "https://www.mohfw.gov.in/pdf/Poster3GHFGA.pdf"
          },
          {
            "title": "6.&nbsp;When and How to wear mask?",
            "link": "https://www.mohfw.gov.in/pdf/Poster4GHFGA.pdf"
          },
          {
            "title": "7.&nbsp;Guidelines on the use of materials",
            "link": "https://www.mohfw.gov.in/pdf/GuidelinebookGA1mb.pdf"
          },
          {
            "title": "1. &nbsp; A letter from HFM to the Health Administrators",
            "link": "https://www.mohfw.gov.in/pdf/HFMLetter.pdf"
          },
          {
            "title": "2. &nbsp;Community leaflet",
            "link": "https://www.mohfw.gov.in/pdf/LeafletGHFandDH.pdf"
          },
          {
            "title": "3.&nbsp; What is Novel Coronavirus?",
            "link": "https://www.mohfw.gov.in/pdf/Poster1GHFandDH.pdf"
          },
          {
            "title": "4.&nbsp;Is your Healthcare facility ready to manage patients with COVID-19?",
            "link": "https://www.mohfw.gov.in/pdf/Poster2.pdf"
          },
          {
            "title": "5.&nbsp;How to protect all health workers at designated hospital?",
            "link": "https://www.mohfw.gov.in/pdf/Poster3.pdf"
          },
          {
            "title": "6.&nbsp;What are my moments of hand hygiene?",
            "link": "https://www.mohfw.gov.in/pdf/Poster4.pdf"
          },
          {
            "title": "7.&nbsp;How to manage Suspected or confirmed COVID-19 patients at designated hospital?",
            "link": "https://www.mohfw.gov.in/pdf/Poster5DH.pdf"
          },
          {
            "title": "8.&nbsp;Guidelines on the use of materials",
            "link": "https://www.mohfw.gov.in/pdf/Guidelinebook1mb.pdf"
          },
          {
            "title": "1. &nbsp;Facilitator Guide",
            "link": "https://www.mohfw.gov.in/pdf/FacilitatorGuideCOVID19_27 March.pdf"
          },
          {
            "title": "2. &nbsp;PPT with seven sessions including for Urban",
            "link": "https://www.mohfw.gov.in/pdf/2COVID19PPT_25MarchPPTWithAnimation.pdf"
          },
          {
            "title": "3.&nbsp; A digital pocket book for front line workers",
            "link": "https://www.mohfw.gov.in/pdf/3Pocketbookof5_Covid19_27March.pdf"
          },
          {
            "title": "4.&nbsp;Training Protocols and guidelines",
            "link": "https://www.mohfw.gov.in/pdf/4FLWToolkitHowtousethetoolkit.pdf"
          },
          {
            "title": "5.&nbsp;Training Plan template",
            "link": "https://www.mohfw.gov.in/pdf/5COVIDFLWTrainingPlan27March.pdf"
          },
          {
            "title": "28.03.2020 When to get tested for COVID-19 English",
            "link": "https://www.mohfw.gov.in/pdf/FINAL_14_03_2020_ENg.pdf"
          },
          {
            "title": "28.03.2020 When to get tested for COVID-19 Hindi",
            "link": "https://www.mohfw.gov.in/pdf/FINAL_14_03_2020_Hindi.pdf"
          },
          {
            "title": "25.03.2020 Role of Frontline Workers in Prevention and Management of CORONA VIRUS- English",
            "link": "https://www.mohfw.gov.in/pdf/PreventionandManagementofCOVID19FLWEnglish.pdf"
          },
          {
            "title": "25.03.2020 Role of Frontline Workers in Prevention and Management of CORONA VIRUS - Hindi",
            "link": "https://www.mohfw.gov.in/pdf/PreventionandManagementofCOVID19FLWHindi.pdf"
          },
          {
            "title": "23.03.2020 Posters for Safety measures against COVID-19 - English",
            "link": "https://www.mohfw.gov.in/pdf/ProtectivemeasuresEng.pdf"
          },
          {
            "title": "23.03.2020 Posters for Safety measures against COVID-19 - Hindi",
            "link": "https://www.mohfw.gov.in/pdf/ProtectivemeasuresHin.pdf"
          },
          {
            "title": "22.03.2020 KIDS, VAAYU & CORONA : Comic book for children to provide correct information about COVID-19 - Part 2",
            "link": "https://www.mohfw.gov.in/pdf/CoronaComic2PGIPU22Mar20.pdf"
          },
          {
            "title": "19.03.2020 Posters for Indians traveling from abroad - English",
            "link": "https://www.mohfw.gov.in/pdf/PostrerEnglishtraveller.pdf"
          },
          {
            "title": "19.03.2020 Posters for Indians traveling from abroad - Hindi",
            "link": "https://www.mohfw.gov.in/pdf/PosterTravellerHindi.pdf"
          },
          {
            "title": "17.03.2020 When to wear mask?: English",
            "link": "https://www.mohfw.gov.in/pdf/Mask-Eng.pdf"
          },
          {
            "title": "17.03.2020 When to wear mask?: Hindi",
            "link": "https://www.mohfw.gov.in/pdf/Mask-Hindi.pdf"
          },
          {
            "title": "09.03.2020 KIDS, VAAYU & CORONA : Comic book for children to provide correct information about COVID-19",
            "link": "https://www.mohfw.gov.in/pdf/Corona_comic_PGI.pdf"
          },
          {
            "title": "06.03.2020 Do's and Don't Poster in English",
            "link": "https://www.mohfw.gov.in/pdf/Poster_Corona_ad_Eng.pdf"
          },
          {
            "title": "06.03.2020 Do's and Don't Poster in Hindi",
            "link": "https://www.mohfw.gov.in/pdf/Poster_Corona_ad_Hin.pdf"
          },
          {
            "title": "12.05.2020 Poster for Felicitating our Nurses and Midwives on International Nurses day 2020",
            "link": "https://www.mohfw.gov.in/pdf/PosterInternationalNurseDay2020.pdf"
          }
        ]
      },
      "lastRefreshed": "2020-09-13T14:42:25.130Z",
      "lastOriginUpdate": "2020-09-13T02:30:00.000Z"
    }


    public api_notif = this.api_data.data.notifications;
    public disp_data = [];
    public data_modifier(){
      this.api_notif.forEach(i => {
        let obj = {};
        if(i.title[2]==='.' && i.title[5]==='.' && i.title.slice(6,10)==='2020'){
          // console.log(i.title.slice(0,10));
          obj["date"] = i.title.slice(0,10);
          obj["notif"] = i.title.slice(11,i.title.length);
          obj["link"] = i.link;
        }
        else{
          obj["date"] = "No Date";
          obj["notif"] = i.title;
          obj["link"] = i.link;
        }
        this.disp_data.push(obj);
        // console.log(obj);
      });
      console.log(this.disp_data.length)
    }
  public i1 = 0;
  public i2 = 10;  
  public table_data;
  updateData(){
    console.log('indexes:',this.i1,this.i2)
    this.table_data = this.disp_data.slice(this.i1,this.i2);    
  }

  prev_col(){
    if(this.i1==0){
      console.log('No change');
    }
    else{
      this.i2 = this.i1;
      this.i1-=10;
    }
    console.log(this.i1,this.i2)
    this.updateData();
  }


  next_col(){
    if(this.i2==this.disp_data.length){
      console.log('No Change');
    }
    else{
      this.i1 +=10;
      this.i2 = Math.min(this.i2+10,this.disp_data.length);
    }
    console.log(this.i1,this.i2);
    this.updateData();
  }
  

}
