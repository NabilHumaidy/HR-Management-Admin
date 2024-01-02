<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard(){
        return Inertia::render('Dashboard');
    }
    public function employees(){
        return Inertia::render('Employees/AppEmployees');
    }
    public function departments(){
        return Inertia::render('Departments/AppDepartments');
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
