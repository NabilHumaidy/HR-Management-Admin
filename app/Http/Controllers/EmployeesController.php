<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Employees;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\File;

class EmployeesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $department  = Department::get();
        return Inertia::render('Employees/AddEmployees',[
            'departments' => $department,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstName' => 'required',
            'lastName' => 'required',
            // 'photoProfile' => 'mimes:jpeg,png,PNG,jpg,gif,pdf|max:10000',
            'email' => 'required|unique:users',
            'password' => 'required|confirmed',
            'mobileNumber' => 'required',
            'dateOfBirth' => 'required',
            'maritalStatus' => 'required',
            'gender' => 'required',
            'nationality' => 'required',
            'address' => 'required',
            'city' => 'required',
            'province' => 'required',
            'zipCode' => 'required',
            'userName' => 'required|unique:users',
            'employeeType' => 'required',
            'department' => 'required',
            'designation' => 'required',
            'workingDays' => 'required',
            'joiningDate' => 'required',
            'officeLocation' => 'required',
            'whatsApp' => 'required',
            'instagram' => 'required',
            // 'appointment' => File::types(['jpeg', 'png', 'jpg', 'pdf'])->min(10000),
            // 'salarySlips' => File::types(['jpeg', 'png', 'jpg', 'pdf'])->min(10000),
            // 'reliving' => File::types(['jpeg', 'png', 'jpg', 'pdf'])->min(10000),
            // 'experience' => File::types(['jpeg', 'png', 'jpg', 'pdf'])->min(10000),
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $data = User::create([
            'firstName' => $request->firstName,
            'lastName' => $request->lastName,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'mobileNumber' => $request->mobileNumber,
            'dateOfBirth' => $request->dateOfBirth,
            'maritalStatus' => $request->maritalStatus,
            'gender' => $request->gender,
            'nationality' => $request->nationality,
            'address' => $request->address,
            'city' => $request->city,
            'province' => $request->province,
            'zipCode' => $request->zipCode,
            'userName' => $request->userName,
            'employeeType' => $request->employeeType,
            'department' => $request->department,
            'designation' => $request->designation,
            'workingDays' => $request->workingDays,
            'joiningDate' => $request->joiningDate,
            'officeLocation' => $request->officeLocation,
            'whatsApp' => $request->whatsApp,
            'instagram' => $request->instagram,
            'photoProfile' => $request->photoProfile,
            'appointment' => $request->appointment,
            'salarySlips' => $request->salarySlips,
            'reliving' => $request->reliving,
            'experience' => $request->experience,
            'status' => $request->status,
        ]);

        if($request->hasFile('photoProfile')){
            $request->file('photoProfile')->move('uploads/Photo Profile/', 'photo_profile_'. $request->firstName . $request->lastName . time() . '.' . $request->file('photoProfile')->getClientOriginalName());
            $data->photoProfile = 'photo_profile_'. $request->firstName . $request->lastName . time() . '.' . $request->file('photoProfile')->getClientOriginalName();
        }
        if($request->hasFile('appointment')){
            $request->file('appointment')->move('uploads/Appointment/', 'appointment_'. $request->firstName . $request->lastName . time() . '.' . $request->file('appointment')->getClientOriginalName());
            $data->appointment = 'appointment_'. $request->firstName . $request->lastName . time() . '.' . $request->file('appointment')->getClientOriginalName();
        }
        if($request->hasFile('salarySlips')){
            $request->file('salarySlips')->move('uploads/SalarySlips/', 'salary_slips_'. $request->firstName . $request->lastName . time() . '.' . $request->file('salarySlips')->getClientOriginalName());
            $data->salarySlips = 'salary_slips_'. $request->firstName . $request->lastName . time() . '.' . $request->file('salarySlips')->getClientOriginalName();
        }
        if($request->hasFile('reliving')){
            $request->file('reliving')->move('uploads/Reliving/', 'reliving_'. $request->firstName . $request->lastName . time() . '.' . $request->file('reliving')->getClientOriginalName());
            $data->reliving = 'reliving_'. $request->firstName . $request->lastName . time() . '.' . $request->file('reliving')->getClientOriginalName();
        }
        if($request->hasFile('experience')){
            $request->file('experience')->move('uploads/Experience/', 'experience_'. $request->firstName . $request->lastName . time() . '.' . $request->file('experience')->getClientOriginalName());
            $data->experience = 'experience_'. $request->firstName . $request->lastName . time() . '.' . $request->file('experience')->getClientOriginalName();
        }
        $data->save();

        // User::create([
            // 'firstName' => $request->firstName,
            // 'lastName' => $request->lastName,
            // 'email' => $request->email,
            // 'password' => Hash::make($request->password),
            // 'mobileNumber' => $request->mobileNumber,
            // 'dateOfBirth' => $request->dateOfBirth,
            // 'maritalStatus' => $request->maritalStatus,
            // 'gender' => $request->gender,
            // 'nationality' => $request->nationality,
            // 'address' => $request->address,
            // 'city' => $request->city,
            // 'province' => $request->province,
            // 'zipCode' => $request->zipCode,
            // 'userName' => $request->userName,
            // 'employeeType' => $request->employeeType,
            // 'department' => $request->department,
            // 'designation' => $request->designation,
            // 'workingDays' => $request->workingDays,
            // 'joiningDate' => $request->joiningDate,
            // 'officeLocation' => $request->officeLocation,
            // 'whatsApp' => $request->whatsApp,
            // 'instagram' => $request->instagram,
            // 'photoProfile' => $photoProfilePath,
        // ]);

        return redirect()->back()->with('message', 'User Added Successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user, $id)
    {
        $employee = User::where('id', $id)->get();
        $department  = Department::get();
        return Inertia::render('Employees/ShowEmployees',[
            'employees' => $employee,
            'departments' => $department,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
