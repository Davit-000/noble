<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateReportsRequest;
use App\Http\Requests\DeleteReportsRequest;
use App\Http\Requests\UpdateReportsRequest;
use App\Models\Report;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;

class ReportsController extends Controller
{
  /**
   * ReportsController constructor.
   */
  public function __construct()
  {
    $this->middleware('auth');
  }

  /**
   * Display a listing of the resource.
   *
   * @return View
   */
  public function index()
  {
    $user = auth()->user();

    return view('reports', [
      'reports' => $user->reports
    ]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param CreateReportsRequest $request
   * @return JsonResponse
   */
  public function store(CreateReportsRequest $request)
  {
    return $request->createReport();
  }

  /**
   * Update the specified resource in storage.
   *
   * @param UpdateReportsRequest $request
   * @param Report $report
   * @return JsonResponse
   */
  public function update(UpdateReportsRequest $request, Report $report)
  {
    return $request->updateReport($report);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param DeleteReportsRequest $request
   * @param Report $report
   * @return JsonResponse
   */
  public function destroy(DeleteReportsRequest $request, Report $report)
  {
    return $request->deleteReport($report);
  }
}
