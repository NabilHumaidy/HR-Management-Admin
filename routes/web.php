<?php

use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\HolidaysController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//User Route

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard/employees', [DashboardController::class, 'employees'])->middleware(['auth', 'verified'])->name('employees');
Route::get('/dashboard/employees/show/{id}', [EmployeesController::class, 'show'])->middleware(['auth', 'verified'])->name('showemployees');
Route::get('/dashboard/employees/add', [EmployeesController::class, 'index'])->middleware(['auth', 'verified'])->name('addemployees');
Route::post('/dashboard/employees/add', [EmployeesController::class, 'store'])->middleware(['auth', 'verified'])->name('storeemployees');

Route::get('/dashboard/departments', [DashboardController::class, 'departments'])->middleware(['auth', 'verified'])->name('departments');
Route::post('/dashboard/departments/add', [DepartmentController::class, 'store'])->middleware(['auth', 'verified'])->name('storedepartment');

Route::get('/dashboard/attendance', [DashboardController::class, 'attendance'])->middleware(['auth', 'verified'])->name('attendance');
Route::get('/dashboard/payroll', [DashboardController::class, 'payroll'])->middleware(['auth', 'verified'])->name('payroll');
Route::get('/dashboard/jobs', [DashboardController::class, 'jobs'])->middleware(['auth', 'verified'])->name('jobs');
Route::get('/dashboard/candidates', [DashboardController::class, 'candidates'])->middleware(['auth', 'verified'])->name('candidates');
Route::get('/dashboard/leaves', [DashboardController::class, 'leaves'])->middleware(['auth', 'verified'])->name('leaves');

Route::get('/dashboard/holidays', [DashboardController::class, 'holidays'])->middleware(['auth', 'verified'])->name('holidays');
Route::post('/dashboard/holidays/add', [HolidaysController::class, 'store'])->middleware(['auth', 'verified'])->name('storeholidays');

Route::get('/dashboard/settings', [DashboardController::class, 'settings'])->middleware(['auth', 'verified'])->name('settings');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//End User Route

//Admin Route

    //Product Route


//End Admin Route
require __DIR__.'/auth.php';
