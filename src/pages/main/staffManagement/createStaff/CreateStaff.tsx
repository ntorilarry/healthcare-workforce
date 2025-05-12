import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { FiUpload } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const CreateStaff = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Information
    title: "",
    gender: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    nationalId: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    emergencyContact: "",
    emergencyPhone: "",

    // Employment Information
    staffId: "",
    employmentDate: "",
    facility: "",
    department: "",
    role: "",
    employmentType: "",
    supervisor: "",
    grade: "",
    jobDescription: "",

    // Credentials
    professionalLicense: "",
    licenseType: "",
    issuingBody: "",
    licenseStatus: "",
    issueDate: "",
    expiryDate: "",
    additionalCertifications: "",
    educationLevel: "",
    institution: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-neutral-200 bg-white px-4 sm:gap-8 lg:px-6">
        <Link to="/staff/list" className="flex items-center gap-2">
          <FaChevronLeft className="h-4 w-4" />
          <span>Back to Staff List</span>
        </Link>
     
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white shadow border border-gray-100 rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold">Staff Registration Form</h2>
              <p className="text-sm text-gray-600">
                Add a new healthcare worker to the system
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-6">
                <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
                  <TabList className="flex space-x-1 rounded-lg bg-gray-100 p-1">
                    {["Personal", "Employment", "Credentials", "Documents"].map(
                      (tab) => (
                        <Tab
                          key={tab}
                          className={({ selected }) =>
                            `w-full rounded-md py-2.5 text-sm font-medium leading-5 ${
                              selected
                                ? "bg-white shadow text-blue-700"
                                : "text-gray-600 hover:bg-white/[0.12] hover:text-gray-800"
                            }`
                          }
                        >
                          {tab}
                        </Tab>
                      )
                    )}
                  </TabList>

                  <TabPanels className="mt-6">
                    {/* Personal Information Tab */}
                    <TabPanel className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Title
                          </label>
                          <select
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          >
                            <option value="">Select title</option>
                            <option value="dr">Dr.</option>
                            <option value="mr">Mr.</option>
                            <option value="mrs">Mrs.</option>
                            <option value="miss">Miss</option>
                            <option value="prof">Prof.</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="gender"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Gender
                          </label>
                          <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter first name"
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter last name"
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="dateOfBirth"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="nationalId"
                            className="block text-sm font-medium text-gray-700"
                          >
                            National ID Number
                          </label>
                          <input
                            type="text"
                            id="nationalId"
                            name="nationalId"
                            value={formData.nationalId}
                            onChange={handleChange}
                            placeholder="Enter national ID number"
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Residential Address
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Enter residential address"
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 text-sm"
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City/Town
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter city or town"
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Region
                          </label>
                          <select
                            id="region"
                            name="region"
                            value={formData.region}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          >
                            <option value="">Select region</option>
                            <option value="greater-accra">Greater Accra</option>
                            <option value="ashanti">Ashanti</option>
                            <option value="western">Western</option>
                            <option value="eastern">Eastern</option>
                            <option value="central">Central</option>
                            <option value="northern">Northern</option>
                            <option value="volta">Volta</option>
                            <option value="upper-east">Upper East</option>
                            <option value="upper-west">Upper West</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="emergencyContact"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Emergency Contact Name
                          </label>
                          <input
                            type="text"
                            id="emergencyContact"
                            name="emergencyContact"
                            value={formData.emergencyContact}
                            onChange={handleChange}
                            placeholder="Enter emergency contact name"
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="emergencyPhone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Emergency Contact Phone
                          </label>
                          <input
                            type="tel"
                            id="emergencyPhone"
                            name="emergencyPhone"
                            value={formData.emergencyPhone}
                            onChange={handleChange}
                            placeholder="Enter emergency contact phone"
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                      </div>
                    </TabPanel>

                    {/* Employment Tab */}
                    <TabPanel className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="staffId"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Staff ID
                          </label>
                          <input
                            type="text"
                            id="staffId"
                            name="staffId"
                            value={formData.staffId}
                            onChange={handleChange}
                            placeholder="Auto-generated"
                            disabled
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 bg-gray-100 shadow text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="employmentDate"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Employment Date
                          </label>
                          <input
                            type="date"
                            id="employmentDate"
                            name="employmentDate"
                            value={formData.employmentDate}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="facility"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Facility
                          </label>
                          <select
                            id="facility"
                            name="facility"
                            value={formData.facility}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          >
                            <option value="">Select facility</option>
                            <option value="korle-bu">
                              Korle Bu Teaching Hospital
                            </option>
                            <option value="ridge">Ridge Hospital</option>
                            <option value="komfo-anokye">
                              Komfo Anokye Teaching Hospital
                            </option>
                            <option value="37-military">
                              37 Military Hospital
                            </option>
                            <option value="cape-coast">
                              Cape Coast Teaching Hospital
                            </option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="department"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Department
                          </label>
                          <select
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          >
                            <option value="">Select department</option>
                            <option value="internal-medicine">
                              Internal Medicine
                            </option>
                            <option value="surgery">Surgery</option>
                            <option value="pediatrics">Pediatrics</option>
                            <option value="obstetrics">
                              Obstetrics & Gynecology
                            </option>
                            <option value="emergency">Emergency</option>
                            <option value="laboratory">Laboratory</option>
                            <option value="pharmacy">Pharmacy</option>
                            <option value="radiology">Radiology</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="role"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Role
                          </label>
                          <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          >
                            <option value="">Select role</option>
                            <option value="medical-doctor">
                              Medical Doctor
                            </option>
                            <option value="specialist">Specialist</option>
                            <option value="nurse">Nurse</option>
                            <option value="midwife">Midwife</option>
                            <option value="lab-technician">
                              Lab Technician
                            </option>
                            <option value="pharmacist">Pharmacist</option>
                            <option value="radiographer">Radiographer</option>
                            <option value="administrator">Administrator</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="employmentType"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Employment Type
                          </label>
                          <select
                            id="employmentType"
                            name="employmentType"
                            value={formData.employmentType}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          >
                            <option value="">Select employment type</option>
                            <option value="permanent">Permanent</option>
                            <option value="contract">Contract</option>
                            <option value="temporary">Temporary</option>
                            <option value="intern">Intern</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="supervisor"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Supervisor
                          </label>
                          <input
                            type="text"
                            id="supervisor"
                            name="supervisor"
                            value={formData.supervisor}
                            onChange={handleChange}
                            placeholder="Enter supervisor's name"
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="grade"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Grade/Level
                          </label>
                          <select
                            id="grade"
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          >
                            <option value="">Select grade/level</option>
                            <option value="entry">Entry Level</option>
                            <option value="junior">Junior</option>
                            <option value="mid">Mid-Level</option>
                            <option value="senior">Senior</option>
                            <option value="principal">Principal</option>
                            <option value="director">Director</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="jobDescription"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Job Description
                        </label>
                        <textarea
                          id="jobDescription"
                          name="jobDescription"
                          value={formData.jobDescription}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Enter job description"
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 text-sm"
                        />
                      </div>
                    </TabPanel>

                    {/* Credentials Tab */}
                    <TabPanel className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="professionalLicense"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Professional License Number
                          </label>
                          <input
                            type="text"
                            id="professionalLicense"
                            name="professionalLicense"
                            value={formData.professionalLicense}
                            onChange={handleChange}
                            placeholder="Enter license number"
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="licenseType"
                            className="block text-sm font-medium text-gray-700"
                          >
                            License Type
                          </label>
                          <select
                            id="licenseType"
                            name="licenseType"
                            value={formData.licenseType}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          >
                            <option value="">Select license type</option>
                            <option value="medical">Medical License</option>
                            <option value="nursing">Nursing License</option>
                            <option value="pharmacy">Pharmacy License</option>
                            <option value="laboratory">
                              Laboratory License
                            </option>
                            <option value="specialist">
                              Specialist Certification
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="issuingBody"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Issuing Body
                          </label>
                          <select
                            id="issuingBody"
                            name="issuingBody"
                            value={formData.issuingBody}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          >
                            <option value="">Select issuing body</option>
                            <option value="gmc">Ghana Medical Council</option>
                            <option value="nmc">
                              Nursing and Midwifery Council
                            </option>
                            <option value="pc">Pharmacy Council</option>
                            <option value="ahpc">
                              Allied Health Professions Council
                            </option>
                            <option value="gcps">
                              Ghana College of Physicians and Surgeons
                            </option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="licenseStatus"
                            className="block text-sm font-medium text-gray-700"
                          >
                            License Status
                          </label>
                          <select
                            id="licenseStatus"
                            name="licenseStatus"
                            value={formData.licenseStatus}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          >
                            <option value="">Select status</option>
                            <option value="valid">Valid</option>
                            <option value="pending">
                              Pending Verification
                            </option>
                            <option value="expired">Expired</option>
                            <option value="revoked">Revoked</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="issueDate"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Issue Date
                          </label>
                          <input
                            type="date"
                            id="issueDate"
                            name="issueDate"
                            value={formData.issueDate}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="expiryDate"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Expiry Date
                          </label>
                          <input
                            type="date"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="additionalCertifications"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Additional Certifications
                        </label>
                        <textarea
                          id="additionalCertifications"
                          name="additionalCertifications"
                          value={formData.additionalCertifications}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Enter any additional certifications"
                          className="mt-1 p-2 block w-full rounded-md border border-gray-300 text-sm"
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="educationLevel"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Highest Education Level
                          </label>
                          <select
                            id="educationLevel"
                            name="educationLevel"
                            value={formData.educationLevel}
                            onChange={handleChange}
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          >
                            <option value="">Select education level</option>
                            <option value="diploma">Diploma</option>
                            <option value="bachelors">Bachelor's Degree</option>
                            <option value="masters">Master's Degree</option>
                            <option value="phd">PhD/Doctorate</option>
                            <option value="fellowship">Fellowship</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="institution"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Institution
                          </label>
                          <input
                            type="text"
                            id="institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            placeholder="Enter institution name"
                            className="mt-1 px-2 py-3 block w-full rounded-md border border-gray-300 text-sm"
                          />
                        </div>
                      </div>
                    </TabPanel>

                    {/* Documents Tab */}
                    <TabPanel className="space-y-6">
                      <div className="space-y-4">
                        <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                            <FiUpload className="h-6 w-6 text-gray-500" />
                          </div>
                          <h3 className="mt-2 text-sm font-semibold">
                            National ID Card
                          </h3>
                          <p className="mt-1 text-xs text-gray-500">
                            Upload a scanned copy of the National ID Card
                          </p>
                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                              Upload File
                            </button>
                          </div>
                        </div>

                        <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                            <FiUpload className="h-6 w-6 text-gray-500" />
                          </div>
                          <h3 className="mt-2 text-sm font-semibold">
                            Professional License
                          </h3>
                          <p className="mt-1 text-xs text-gray-500">
                            Upload a scanned copy of the Professional License
                          </p>
                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                              Upload File
                            </button>
                          </div>
                        </div>

                        <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                            <FiUpload className="h-6 w-6 text-gray-500" />
                          </div>
                          <h3 className="mt-2 text-sm font-semibold">
                            Educational Certificates
                          </h3>
                          <p className="mt-1 text-xs text-gray-500">
                            Upload scanned copies of educational certificates
                          </p>
                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                              Upload Files
                            </button>
                          </div>
                        </div>

                        <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                            <FiUpload className="h-6 w-6 text-gray-500" />
                          </div>
                          <h3 className="mt-2 text-sm font-semibold">
                            Employment Contract
                          </h3>
                          <p className="mt-1 text-xs text-gray-500">
                            Upload a scanned copy of the employment contract
                          </p>
                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                              Upload File
                            </button>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </TabPanels>
                </TabGroup>
              </div>

              <div className="flex justify-between border-t border-gray-300 px-6 py-4">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Create Staff
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateStaff;
