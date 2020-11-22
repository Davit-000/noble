<?php

namespace App\Http\Requests;

use App\Models\Report;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class UpdateReportsRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return $this->user()->id === $this->route('report')->user_id;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'amount' => 'required|numeric|between:1,99999999.99'
    ];
  }

  /**
   * Update report
   *
   * @param Report $report
   * @return JsonResponse
   */
  public function updateReport(Report $report)
  {
    $report->update([
      'amount' => $this->input('amount')
    ]);

    return response()->json([
      'message' => 'Report updated',
      'report' => $report->fresh()
    ], Response::HTTP_OK);
  }
}
