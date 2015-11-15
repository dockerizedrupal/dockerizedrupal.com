<?php

/**
 * @file
 * Contains \Drupal\gtm\Form\GTMAdminSettingsForm.
 */

namespace Drupal\gtm\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Google Tag Manager admin settings form.
 */
class GTMAdminSettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'gtm_admin_settings_form';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return array('gtm.settings');
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('gtm.settings');

    $form['container_id'] = array(
      '#type' => 'textfield',
      '#title' => t('Container ID'),
      '#required' => TRUE,
      '#default_value' => $config->get('container_id'),
      '#placeholder' => 'GTM-XXXXXX',
    );

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);

    $form_state->setValue('container_id', trim($form_state->getValue('container_id')));

    if (!preg_match('/^GTM-.*$/', $form_state->getValue('container_id'))) {
      $form_state->setErrorByName('container_id', t('A valid Google Tag Manager Container ID is case sensitive and formatted like GTM-XXXXXX.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('gtm.settings');

    $config
      ->set('container_id', $form_state->getValue('container_id'))
      ->save();

    parent::submitForm($form, $form_state);
  }
}
