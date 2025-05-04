'use client'; // This is needed for buttons to work

export default function DeleteButton() {
  const handleDelete = async () => {
    if (confirm("Are you sure? This cannot be undone!")) {
      try {
        // This will send an email to you
        await fetch('/api/delete-account', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            email: 'user@example.com' // This will be the user's email
          }),
        });
        alert("Account deletion request sent!");
      } catch (error) {
        alert("Failed to send request");
      }
    }
  };

  return (
    <button 
      onClick={handleDelete}
      style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px' }}
    >
      Delete My Account
    </button>
  );
}