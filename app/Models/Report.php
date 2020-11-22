<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Report extends Model
{
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = ['amount'];

  /**
   * User relation
   *
   * @return BelongsTo
   */
  public function user()
  {
    return $this->belongsTo(
      User::class,
      'user_id',
      'id'
    );
  }
}
