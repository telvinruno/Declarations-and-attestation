"use client"

import { useState } from "react"
import { Trash2, Edit2, AlertCircle } from "lucide-react"
import { SuccessPopup } from "./success-popup"

interface SafaricomMember {
  id: string
  employeeId: string
  relationshipType: string
}

interface BusinessMember {
  id: string
  fullName: string
  username: string
  organizationName: string
  role: string
  position: string
  relationshipType: string
}

type FormMember = SafaricomMember | BusinessMember

export default function FamilyRelationsForm() {
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [safaricomMembers, setSafaricomMembers] = useState<SafaricomMember[]>([])
  const [businessMembers, setBusinessMembers] = useState<BusinessMember[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const [safaricomForm, setSafaricomForm] = useState({
    employeeId: "",
    relationshipType: "",
  })

  const [businessForm, setBusinessForm] = useState({
    fullName: "",
    username: "",
    organizationName: "",
    role: "",
    position: "",
    relationshipType: "",
  })

  const categories = [
    { id: "safaricom", label: "Safaricom Employee" },
    { id: "business", label: "Business partner" },
    { id: "competitor", label: "Working for competitor" },
  ]

  const relationshipOptions = ["Sibling", "Mother", "Wife", "Sister", "Husband", "Cousin", "Aunt", "Uncle"]

  const handleAddSafaricomMember = () => {
    if (!safaricomForm.employeeId || !safaricomForm.relationshipType) {
      return
    }

    if (editingId) {
      setSafaricomMembers(
        safaricomMembers.map((member) => (member.id === editingId ? { ...member, ...safaricomForm } : member)),
      )
      setEditingId(null)
    } else {
      setSafaricomMembers([
        ...safaricomMembers,
        {
          id: Date.now().toString(),
          ...safaricomForm,
        },
      ])
    }

    setSafaricomForm({ employeeId: "", relationshipType: "" })
  }

  const handleAddBusinessMember = () => {
    if (
      !businessForm.fullName ||
      !businessForm.username ||
      !businessForm.organizationName ||
      !businessForm.role ||
      !businessForm.position ||
      !businessForm.relationshipType
    ) {
      return
    }

    if (editingId) {
      setBusinessMembers(
        businessMembers.map((member) => (member.id === editingId ? { ...member, ...businessForm } : member)),
      )
      setEditingId(null)
    } else {
      setBusinessMembers([
        ...businessMembers,
        {
          id: Date.now().toString(),
          ...businessForm,
        },
      ])
    }

    setBusinessForm({
      fullName: "",
      username: "",
      organizationName: "",
      role: "",
      position: "",
      relationshipType: "",
    })
  }

  const handleEdit = (member: FormMember) => {
    setEditingId(member.id)
    if ("employeeId" in member) {
      setSafaricomForm({
        employeeId: member.employeeId,
        relationshipType: member.relationshipType,
      })
    } else {
      setBusinessForm({
        fullName: member.fullName,
        username: member.username,
        organizationName: member.organizationName,
        role: member.role,
        position: member.position,
        relationshipType: member.relationshipType,
      })
    }
  }

  const handleDeleteSafaricom = (id: string) => {
    setSafaricomMembers(safaricomMembers.filter((member) => member.id !== id))
  }

  const handleDeleteBusiness = (id: string) => {
    setBusinessMembers(businessMembers.filter((member) => member.id !== id))
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setEditingId(null)
    setSafaricomForm({ employeeId: "", relationshipType: "" })
    setBusinessForm({
      fullName: "",
      username: "",
      organizationName: "",
      role: "",
      position: "",
      relationshipType: "",
    })
  }

  const handleSubmit = () => {
    setShowSuccessPopup(true)
  }

  return (
    <div className="w-3/4 mx-13 my-10 bg-white p-5 rounded">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Family Member Conflict of Interest</h1>
          <p className="text-gray-600">
            Please review the policy and complete the declaration below to confirm your acknowledgement
          </p>
        </div>

        {/* Category Selection */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`p-4 rounded-lg border-2 transition-all text-center font-medium ${
                  selectedCategory === category.id
                    ? "border-green-600 bg-green-50"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
              >
                <div className="flex items-center justify-center h-6 mb-2">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedCategory === category.id ? "border-green-600 bg-green-600" : "border-gray-400"
                    }`}
                  >
                    {selectedCategory === category.id && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </div>
                <p className="text-gray-900">{category.label}</p>
              </button>
            ))}
          </div>
        </div>

        {selectedCategory === "safaricom" && (
          <div className="space-y-8">
            {/* Form Card */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Add Family Member</h2>

              {/* Employee ID */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Employee<span className="text-red-500">*</span>
                </label>
                <textarea
                  value={safaricomForm.employeeId}
                  onChange={(e) => setSafaricomForm({ ...safaricomForm, employeeId: e.target.value })}
                  placeholder="Enter your EK number or Username"
                  className="w-4/5 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                  rows={3}
                />
              </div>

              {/* Relationship Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Nature of Relationship<span className="text-red-500">*</span>
                </label>
                <select
                  value={safaricomForm.relationshipType}
                  onChange={(e) => setSafaricomForm({ ...safaricomForm, relationshipType: e.target.value })}
                  className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white"
                >
                  <option value="">Select a relationship</option>
                  {relationshipOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAddSafaricomMember}
                disabled={!safaricomForm.employeeId || !safaricomForm.relationshipType}
                className={`w-1/5 py-2 rounded-lg font-medium transition-all ${
                  safaricomForm.employeeId && safaricomForm.relationshipType
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                + Add another
              </button>
            </div>

            {/* Declared Family Members */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Declared family members</h2>

              {safaricomMembers.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <AlertCircle className="w-12 h-12 text-gray-400 mb-3" />
                  <p className="text-gray-600 font-medium">No Member Added</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {safaricomMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">Employee ID: {member.employeeId}</p>
                        <p className="text-gray-600 text-sm">Relationship: {member.relationshipType}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(member)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-all"
                          aria-label="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteSafaricom(member.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition-all"
                          aria-label="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {selectedCategory === "business" && (
          <div className="space-y-8">
            {/* Form Card */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Add Business Partner</h2>

              {/* Full Name & Username */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={businessForm.fullName}
                    onChange={(e) => setBusinessForm({ ...businessForm, fullName: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Username<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={businessForm.username}
                    onChange={(e) => setBusinessForm({ ...businessForm, username: e.target.value })}
                    placeholder="Enter username"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                    rows={2}
                  />
                </div>
              </div>

              {/* Organization Name */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Business organization Name<span className="text-red-500">*</span>
                </label>
                <textarea
                  value={businessForm.organizationName}
                  onChange={(e) => setBusinessForm({ ...businessForm, organizationName: e.target.value })}
                  placeholder="Enter business organization name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                  rows={2}
                />
              </div>

              {/* Role & Position */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Role<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={businessForm.role}
                    onChange={(e) => setBusinessForm({ ...businessForm, role: e.target.value })}
                    placeholder="Enter role"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Position<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={businessForm.position}
                    onChange={(e) => setBusinessForm({ ...businessForm, position: e.target.value })}
                    placeholder="Enter position"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                    rows={2}
                  />
                </div>
              </div>

              {/* Relationship Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Nature of Relationship<span className="text-red-500">*</span>
                </label>
                <select
                  value={businessForm.relationshipType}
                  onChange={(e) => setBusinessForm({ ...businessForm, relationshipType: e.target.value })}
                  className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white"
                >
                  <option value="">Select a relationship</option>
                  {relationshipOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAddBusinessMember}
                disabled={
                  !businessForm.fullName ||
                  !businessForm.username ||
                  !businessForm.organizationName ||
                  !businessForm.role ||
                  !businessForm.position ||
                  !businessForm.relationshipType
                }
                className={`w-1/5 py-2 rounded-lg font-medium transition-all ${
                  businessForm.fullName &&
                  businessForm.username &&
                  businessForm.organizationName &&
                  businessForm.role &&
                  businessForm.position &&
                  businessForm.relationshipType
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                + Add another
              </button>
            </div>

            {/* Declared Family Members */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Declared family members</h2>

              {businessMembers.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <AlertCircle className="w-12 h-12 text-gray-400 mb-3" />
                  <p className="text-gray-600 font-medium">No Member Added</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {businessMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">{member.fullName}</p>
                        <p className="text-gray-600 text-sm">Username: {member.username}</p>
                        <p className="text-gray-600 text-sm">Organization: {member.organizationName}</p>
                        <p className="text-gray-600 text-sm">
                          {member.role} | {member.position}
                        </p>
                        <p className="text-gray-600 text-sm">Relationship: {member.relationshipType}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(member)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-all"
                          aria-label="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteBusiness(member.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition-all"
                          aria-label="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {selectedCategory === "competitor" && (
          <div className="space-y-8">
            {/* Form Card */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Add Competitor Information</h2>

              {/* Full Name & Username */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={businessForm.fullName}
                    onChange={(e) => setBusinessForm({ ...businessForm, fullName: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Username<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={businessForm.username}
                    onChange={(e) => setBusinessForm({ ...businessForm, username: e.target.value })}
                    placeholder="Enter username"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                    rows={2}
                  />
                </div>
              </div>

              {/* Organization Name */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Business organization Name<span className="text-red-500">*</span>
                </label>
                <textarea
                  value={businessForm.organizationName}
                  onChange={(e) => setBusinessForm({ ...businessForm, organizationName: e.target.value })}
                  placeholder="Enter business organization name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                  rows={2}
                />
              </div>

              {/* Role & Position */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Role<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={businessForm.role}
                    onChange={(e) => setBusinessForm({ ...businessForm, role: e.target.value })}
                    placeholder="Enter role"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Position<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={businessForm.position}
                    onChange={(e) => setBusinessForm({ ...businessForm, position: e.target.value })}
                    placeholder="Enter position"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                    rows={2}
                  />
                </div>
              </div>

              {/* Relationship Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Nature of Relationship<span className="text-red-500">*</span>
                </label>
                <select
                  value={businessForm.relationshipType}
                  onChange={(e) => setBusinessForm({ ...businessForm, relationshipType: e.target.value })}
                  className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white"
                >
                  <option value="">Select a relationship</option>
                  {relationshipOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAddBusinessMember}
                disabled={
                  !businessForm.fullName ||
                  !businessForm.username ||
                  !businessForm.organizationName ||
                  !businessForm.role ||
                  !businessForm.position ||
                  !businessForm.relationshipType
                }
                className={`w-1/5 py-2 rounded-lg font-medium transition-all ${
                  businessForm.fullName &&
                  businessForm.username &&
                  businessForm.organizationName &&
                  businessForm.role &&
                  businessForm.position &&
                  businessForm.relationshipType
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                + Add another
              </button>
            </div>

            {/* Declared Family Members */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Declared family members</h2>

              {businessMembers.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <AlertCircle className="w-12 h-12 text-gray-400 mb-3" />
                  <p className="text-gray-600 font-medium">No Member Added</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {businessMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">{member.fullName}</p>
                        <p className="text-gray-600 text-sm">Username: {member.username}</p>
                        <p className="text-gray-600 text-sm">Organization: {member.organizationName}</p>
                        <p className="text-gray-600 text-sm">
                          {member.role} | {member.position}
                        </p>
                        <p className="text-gray-600 text-sm">Relationship: {member.relationshipType}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(member)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-all"
                          aria-label="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteBusiness(member.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition-all"
                          aria-label="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {selectedCategory && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all"
            >
              Submit declaration
            </button>
          </div>
        )}

        {showSuccessPopup && (
          <SuccessPopup
            isOpen={showSuccessPopup}
            onClose={() => setShowSuccessPopup(false)}
            message="Success!"
            submessage="Your conflict of interest declaration has been submitted successfully."
          />
        )}
      </div>
    </div>
  )
}
