import React from 'react'

function Registration() {
    return (
        <div>  <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Gym Member Registration</h2>

            <form class="space-y-6">
                {/* <!-- Personal Info --> */}
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <label class="block mb-1 font-medium">Full Name</label>
                        <input type="text" class="w-full border border-gray-300 px-4 py-2 rounded" required />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Email</label>
                        <input type="email" class="w-full border border-gray-300 px-4 py-2 rounded" required />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Phone Number</label>
                        <input type="tel" class="w-full border border-gray-300 px-4 py-2 rounded" required />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Age</label>
                        <input type="number" class="w-full border border-gray-300 px-4 py-2 rounded" min="10" max="100" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Gender</label>
                        <select class="w-full border border-gray-300 px-4 py-2 rounded">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Address</label>
                        <input type="text" class="w-full border border-gray-300 px-4 py-2 rounded" />
                    </div>
                </div>

                {/* <!-- Fitness Info --> */}
                <div class="grid md:grid-cols-3 gap-4">
                    <div>
                        <label class="block mb-1 font-medium">Height (cm)</label>
                        <input type="number" class="w-full border border-gray-300 px-4 py-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Weight (kg)</label>
                        <input type="number" class="w-full border border-gray-300 px-4 py-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Fitness Goal</label>
                        <select class="w-full border border-gray-300 px-4 py-2 rounded">
                            <option>Lose Weight</option>
                            <option>Gain Muscle</option>
                            <option>Stay Fit</option>
                        </select>
                    </div>
                </div>

                {/* <!-- Membership --> */}
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <label class="block mb-1 font-medium">Membership Plan</label>
                        <select class="w-full border border-gray-300 px-4 py-2 rounded">
                            <option>Monthly</option>
                            <option>Quarterly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Start Date</label>
                        <input type="date" class="w-full border border-gray-300 px-4 py-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Preferred Time</label>
                        <select class="w-full border border-gray-300 px-4 py-2 rounded">
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                        </select>
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Medical Conditions</label>
                        <input type="text" class="w-full border border-gray-300 px-4 py-2 rounded" placeholder="(Optional)" />
                    </div>
                </div>

                {/* <!-- Login Section --> */}
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <label class="block mb-1 font-medium">Username</label>
                        <input type="text" class="w-full border border-gray-300 px-4 py-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Password</label>
                        <input type="password" class="w-full border border-gray-300 px-4 py-2 rounded" />
                    </div>
                </div>

                {/* <!-- Terms and Submit --> */}
                <div class="flex items-center gap-2">
                    <input type="checkbox" id="terms" required />
                    <label for="terms" class="text-sm text-gray-600">I agree to the Terms and Conditions</label>
                </div>

                <button type="submit" class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
                    Register Now
                </button>
            </form>
        </div></div>
    )
}

export default Registration