<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Foundation\Http\FormRequest;

class CreateReportsRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'amount' => 'nullable|numeric'
    ];
  }

  /**
   * Create new report
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function createReport()
  {
    /** @var User $user */
    $user = auth()->user();

    $report = $user->reports()->create(['amount' => $this->input('amount')]);

    return response()->json([
      'message' => 'Report created.',
      'report' => $report
    ], Response::HTTP_CREATED);
  }
}
