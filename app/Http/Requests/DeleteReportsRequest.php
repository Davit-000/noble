<?php

namespace App\Http\Requests;

use App\Models\Report;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class DeleteReportsRequest extends FormRequest
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
      //
    ];
  }

  /**
   * delete report
   *
   * @param Report $report
   * @return JsonResponse
   */
  public function deleteReport(Report $report)
  {
    $message = 'Report deleted.';
    $status = Response::HTTP_OK;

    try {
      $report->delete();
    } catch (\Exception $e) {
      $$message = $e->getMessage();
      $$status = $e->getCode();
    }

    return response()->json(compact('message'), $status);
  }
}
