<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Note; // Import the Note model

class NoteSeeder extends Seeder
{

    public function run(): void
    {
        Note::create(['title' => 'Sample Note 1', 'content' => 'This is a sample note.']);
        Note::create(['title' => 'Sample Note 2', 'content' => 'Another sample note.']);
    }
}
