"use client"; // This is needed for buttons to work
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeletePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [deleted, setDeleted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = () => {
    const { name, email } = formData;
    if (!name || !email) {
      alert('Please fill in both fields before deleting.');
      return;
    }

    const confirmed = window.confirm('Are you sure you want to delete your account? This action is irreversible.');
    if (confirmed) {
      // Here you'd call your API to delete the account.
      setDeleted(true);
      router.push('/'); // Redirect to home page after deletion

    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md">
      {!deleted ? (
        <>
          <h1 className="text-2xl font-bold mb-4 text-red-600">Delete My Account</h1>
          <p className="mb-4 text-gray-700">We're sad to see you go. Fill the form and click below to delete your account.</p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border px-3 py-2 rounded"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border px-3 py-2 rounded"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Delete Account
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold text-green-600">Account Deleted Successfully</h2>
          <p className="text-gray-700 mt-2">We hope to see you again.</p>
        </div>
      )}
    </div>
  );
}
