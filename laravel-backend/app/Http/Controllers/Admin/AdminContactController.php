<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Contacts/Index', [
            'submissions' => ContactSubmission::recent()->get()
        ]);
    }

    public function show(ContactSubmission $contact)
    {
        return Inertia::render('Admin/Contacts/Show', [
            'submission' => $contact
        ]);
    }

    public function update(Request $request, ContactSubmission $contact)
    {
        $validated = $request->validate([
            'status' => 'required|in:new,read,replied',
        ]);

        $contact->update($validated);

        return back()->with('success', 'Status updated successfully.');
    }

    public function destroy(ContactSubmission $contact)
    {
        $contact->delete();
        return redirect()->route('admin.contacts.index')->with('success', 'Submission deleted successfully.');
    }
}
