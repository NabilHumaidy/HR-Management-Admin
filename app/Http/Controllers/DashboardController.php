<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Department;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function dashboard(){
        return Inertia::render('Dashboard');
    }
    public function employees(){
        return Inertia::render('Employees/AppEmployees');
    }
    public function departments(){
        $departments = Department::all();
        $employee = User::all();
        return Inertia::render('Departments/AppDepartments', ['departments' => $departments, 'employee' => $employee]);
    }
    public function attendance(){
        return Inertia::render('Attendance/AppAttendance');
    }
    public function payroll(){
        return Inertia::render('Payroll/AppPayroll');
    }
    public function jobs(){
        return Inertia::render('Jobs/AppJobs');
    }
    public function candidates(){
        return Inertia::render('Candidates/AppCandidates');
    }
    public function leaves(){
        return Inertia::render('Leaves/AppLeaves');
    }
    public function holidays(){
        return Inertia::render('Holidays/AppHolidays');
    }
    public function settings(){
        return Inertia::render('Settings/AppSettings');
    }
}
