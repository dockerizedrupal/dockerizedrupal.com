<?php

/**
 * @file
 * Contains \Drupal\dd\Controller\FrontPageController.
 */

namespace Drupal\dd\Controller;

use Drupal\Core\Controller\ControllerBase;

class FrontPageController extends ControllerBase {
  public function content() {
    return array(
      '#type' => 'markup',
      '#markup' => 'Front page',
    );
  }
}
