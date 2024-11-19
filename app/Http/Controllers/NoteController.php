<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index()
    {
        return response()->json(Note::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string'
        ]);

        $note = Note::create($request->only(['title', 'content']));
        return response()->json($note, 201);
    }

    public function show($id)
    {
        $note = Note::find($id);
        return $note ? response()->json($note) : response()->json(['error' => 'Note not found'], 404);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string'
        ]);

        $note = Note::find($id);
        if ($note) {
            $note->update($request->only(['title', 'content']));
            return response()->json($note);
        }
        return response()->json(['error' => 'Note not found'], 404);
    }

    public function destroy($id)
    {
        $note = Note::find($id);
        if ($note) {
            $note->delete();
            return response()->json(['message' => 'Note deleted']);
        }
        return response()->json(['error' => 'Note not found'], 404);
    }
}

