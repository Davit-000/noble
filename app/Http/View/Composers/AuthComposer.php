<?php

namespace App\Http\View\Composers;


use App\Models\User;
use Illuminate\View\View;

class AuthComposer
{
  protected $auth;

  public function __construct()
  {
    $user = auth()->user();

    $this->auth = json_encode([
      'user' => $user,
      'check' => auth()->check()
    ]);
  }

  /**
   * @param View $view
   */
  public function compose(View $view)
  {
    $view->with('auth', $this->auth);
  }
}
